import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <Skills />
        <Journey />
      </main>
    </div>
  );
}

export default App;
