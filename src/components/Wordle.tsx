import React, { useEffect } from "react";
import PropsSolutions from "../../types/PropsSolutions";
import useWordleHook from "../hooks/useWordleHook";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle: React.FC<PropsSolutions> = ({ solution }) => {
  const {
    handleKeyPress,
    currentGuess,
    userGuesses,
    isCorrect,
    numberOfTurns,
  } = useWordleHook(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div>
      <div>solutions: {solution.word} </div>
      <Grid
        currentGuess={currentGuess}
        numberOfTurns={numberOfTurns}
        userGuesses={userGuesses}
      />
      <Keypad />
    </div>
  );
};

export default Wordle;
