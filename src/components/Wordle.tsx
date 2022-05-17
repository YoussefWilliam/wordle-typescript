import React, { useEffect } from "react";
import PropsSolutions from "../../types/PropsSolutions";
import useWordleHook from "../hooks/useWordleHook";

const Wordle: React.FC<PropsSolutions> = ({ solution }) => {
  const { handleKeyPress, currentGuess } = useWordleHook(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [handleKeyPress]);
  return <div>{currentGuess}</div>;
};

export default Wordle;
