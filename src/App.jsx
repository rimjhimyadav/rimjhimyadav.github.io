import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Intro />
        <Projects />
      </main>
    </div>
  );
}

export default App;
