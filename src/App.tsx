import { useState, useEffect } from "react";
import "./App.css";
import Solution from "../types/Solution";
import Wordle from "./components/Wordle";
import { solutions } from "../src/data/db";

function App() {
  const [solution, setSolution] = useState<Solution>();
  useEffect(() => {
    const dataLength = solutions.length;
    setSolution(solutions[Math.floor(Math.random() * dataLength)]);
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle game</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
