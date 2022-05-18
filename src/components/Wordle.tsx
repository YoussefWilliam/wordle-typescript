import React, { useState, useEffect } from "react";
import PropsSolutions from "../../types/PropsSolutions";
import useWordleHook from "../hooks/useWordleHook";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Model from "./Model";

const Wordle: React.FC<PropsSolutions> = ({ solution }) => {
  const [showModal, setShowModel] = useState(false);
  const {
    handleKeyPress,
    currentGuess,
    userGuesses,
    isCorrect,
    usedKeys,
    numberOfTurns,
  } = useWordleHook(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    if (isCorrect) {
      setTimeout(() => setShowModel(true), 2000);
      window.removeEventListener("keyup", handleKeyPress);
    }

    if (numberOfTurns > 5) {
      setTimeout(() => setShowModel(true), 2000);
      window.removeEventListener("keyup", handleKeyPress);
    }

    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [handleKeyPress, isCorrect, numberOfTurns]);

  return (
    <div>
      <Grid
        currentGuess={currentGuess}
        numberOfTurns={numberOfTurns}
        userGuesses={userGuesses}
      />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Model
          isCorrect={isCorrect}
          solution={solution}
          numberOfTurns={numberOfTurns}
        />
      )}
    </div>
  );
};

export default Wordle;
