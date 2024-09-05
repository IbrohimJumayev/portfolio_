import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import FooterSection from "./components/footer/FooterSection";
import HeroSection from "./components/hero/HeroSection";
import Projects from "./components/myWork/Projects";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-[1350px] m-auto px-5">
          <HeroSection />
          <Experience />
          <About />
          <Skills />
          <Projects />
        </div>
        <FooterSection />
      </div>
    </>
  );
}

export default App;
