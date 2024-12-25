import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Video from "./components/Video";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Features />
        <Video />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
