import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import AboutSection from '../src/components/About';
import Projects from '../src/components/Projects';
import Skills from '../src/components/Skills';
import Exp from '../src/components/Exp';
import Edu from '../src/components/Edu';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/scroll-top';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        <Hero />
        <AboutSection />
        <Exp />
        <Skills />
        <Projects />
        <Edu />
        <Contact />
        <ScrollToTop />
        <Footer />
        <ToastContainer />
      </main>
    </>
  );
}
