import React, { useEffect } from "react";
import PropsSolutions from "../../types/PropsSolutions";
import useWordleHook from "../hooks/useWordleHook";

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

  useEffect(() => {
    console.log(userGuesses, isCorrect, numberOfTurns);
  }, [userGuesses, numberOfTurns, isCorrect]);

  return (
    <div>
      <div>solutions: {solution.word} </div>

      <div>Current guess: {currentGuess} </div>
    </div>
  );
};

export default Wordle;
