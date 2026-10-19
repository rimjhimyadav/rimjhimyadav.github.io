import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Intro />
      </main>
    </div>
  );
}

export default App;
