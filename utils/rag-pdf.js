import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import {
  ChatGoogleGenerativeAI,
  GoogleGenerativeAIEmbeddings,
} from "@langchain/google-genai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { Document } from "langchain/document";

// Set up the worker for PDF.js
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${getDocument.version}/pdf.worker.min.js`;

const gemini_modal = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  apiKey: "AIzaSyA-2Hg6Z6IcOJOhCQfLi8ACQ08jaD7MdNM",
  temperature: 0.9,
});

let vectorStore = null;

async function extractTextFromPDF(pdfFile) {
  try {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const pdf = await getDocument({ data: arrayBuffer }).promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + " ";
    }

    return fullText;
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    throw error;
  }
}

export async function processDocument(pdfFile) {
  try {
    const text = await extractTextFromPDF(pdfFile);
    const doc = new Document({ pageContent: text });

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1200,
      chunkOverlap: 200,
    });

    const splittedDocument = await textSplitter.splitDocuments([doc]);

    const embeddr = new GoogleGenerativeAIEmbeddings({
      apiKey: "AIzaSyA-2Hg6Z6IcOJOhCQfLi8ACQ08jaD7MdNM",
    });

    vectorStore = await MemoryVectorStore.fromDocuments(
      splittedDocument,
      embeddr
    );
    return true;
  } catch (error) {
    console.error("Error processing document:", error);
    throw error;
  }
}

export async function askQuestion(userQuestion) {
  if (!vectorStore) {
    throw new Error("Please process a document first");
  }

  try {
    const retriver = vectorStore.asRetriever();

    const instructionPrompt = `You are an assistant and you have to answer the questions
    use following pieces of retrieved context to answer the questons
    {context}
    `;

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", instructionPrompt],
      ["user", "{input}"],
    ]);

    const questionAnswerChain = await createStuffDocumentsChain({
      llm: gemini_modal,
      prompt: prompt,
    });

    const ragChain = await createRetrievalChain({
      retriever: retriver,
      combineDocsChain: questionAnswerChain,
    });

    const response = await ragChain.invoke({
      input: userQuestion,
    });

    return response.answer;
  } catch (error) {
    console.error("Error processing question:", error);
    throw error;
  }
}
