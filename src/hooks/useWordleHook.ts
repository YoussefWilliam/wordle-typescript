import React, { useState } from "react";
import Guesses from "../../types/Guesses";
import Solution from "../../types/Solution";

const useWordleHook = (solution: Solution) => {
  const [numberOfTurns, setNumberOfTurns] = useState<number>(0); // if 6 -> game over
  const [currentGuess, setCurrentGuess] = useState<string>(""); // track what user is typing
  const [userGuesses, setGuesses] = useState<Array<string>>([]); // number of guess with colors per game
  const [historyGuesses, setHistoryGuesses] = useState<Array<string>>([]); // number of guesses per Game
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  /**
   * Format the guess of the user into an array of object:
   * [{key: 'a', color: 'red'}]
   * @param solution
   * @returns object of Guesses
   */
  const formatGuess = () => {
    console.log("new guess is added");
    historyGuesses.push(currentGuess);
    setCurrentGuess("");
    setNumberOfTurns((prevTurn) => prevTurn + 1);
  };

  /**
   * add the new guess to the guesses statuses
   * update the isCorrect state if the guess is correct
   * add one to the turn state
   * @param guess
   */
  const addNewGuesses = () => {};

  /**
   * check if the user presssed an enter btn to submit the guess
   * @param key check if it's a letter
   */
  const handleKeyPress = ({ key }: any) => {
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
    const myRegex = /^[A-Za-z]$/;
    if (myRegex.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prevGuess) => prevGuess + key);
    }
    if (key === "Enter") {
      if (numberOfTurns > 5) {
        console.log("you finished up your guesses trials, game over");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("guess is a string of 5");
        return;
      }
      if (historyGuesses.includes(currentGuess)) {
        console.log("you already tried this word before, take another guess");
        return;
      }
      formatGuess();
    }
  };

  return {
    numberOfTurns,
    currentGuess,
    userGuesses,
    isCorrect,
    handleKeyPress,
  };
};

export default useWordleHook;
