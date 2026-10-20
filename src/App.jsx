import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
