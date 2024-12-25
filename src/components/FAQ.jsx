import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What makes your trading platform unique?",
    answer:
      "Our platform combines advanced analytics, real-time data, and user-friendly interface to provide a comprehensive trading experience. We offer unique features like community insights and AI-powered market analysis.",
  },
  {
    question: "Is my investment safe?",
    answer:
      "We implement bank-grade security measures and encryption to protect your investments. All transactions are monitored 24/7, and we maintain strict compliance with financial regulations.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply click the 'Connect Telegram' button, follow our verification process, and you'll have access to our full suite of trading tools within minutes.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our expert team is always ready to help with any questions or concerns.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "We believe in complete transparency. All our fees are clearly displayed before any transaction. There are no hidden charges or surprise costs.",
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl divide-y divide-gray-900/10"
        >
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 text-center mb-10">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronUpIcon
                            className={`h-6 w-6 transform ${
                              open ? "rotate-180" : "rotate-0"
                            } transition-transform duration-200`}
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </motion.div>
                )}
              </Disclosure>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
