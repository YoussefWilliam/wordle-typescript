import React, { useState, useEffect } from "react";
import "./App.css";
import Solution from "../types/Solution";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState<Solution>();
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((data) => {
        const dataLength = data.length;
        setSolution(data[Math.floor(Math.random() * dataLength)]);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle game</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
