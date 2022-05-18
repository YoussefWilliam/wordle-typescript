import React, { useState } from "react";
import Guesses from "../../types/Guesses";
import Solution from "../../types/Solution";

const useWordleHook = (solution: Solution) => {
  const [numberOfTurns, setNumberOfTurns] = useState<number>(0); // if 6 -> game over
  const [currentGuess, setCurrentGuess] = useState<string>(""); // track what user is typing
  const [userGuesses, setGuesses] = useState<Array<Guesses> | any>([
    ...Array(6),
  ]); // number of guess with colors per game
  const [historyGuesses, setHistoryGuesses] = useState<Array<string>>([]); // number of guesses per Game
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  /**
   * Format the guess of the user into an array of object:
   * [{key: 'a', color: 'red'}]
   * @param solution
   * @returns object of Guesses
   * @params => blink => ['b', 'l', 'i', 'n', 'k']
   * @returns => guess => block => [{key: 'b', color: 'green'}, {key:'l', color: 'green'}, {key: 'o', color: 'grey'},{key: 'c' ,color: 'grey'}, {key: 'k', color: 'green'} ]
   */
  const formatGuess = () => {
    const destructedSolution = solution.word.split("");
    const formattedArray = destructedSolution.map((solutionLetter, i) => {
      return {
        key: currentGuess[i],
        color:
          solutionLetter === currentGuess[i]
            ? "green"
            : solution.word.includes(currentGuess[i])
            ? "yellow"
            : "grey",
      };
    });
    return formattedArray;
  };

  /**
   * add the new guess to the guesses statuses
   * update the isCorrect state if the guess is correct
   * add one to the turn state
   * @param guess
   */
  const addNewGuesses = (formattedGuess: Array<Guesses>) => {
    if (currentGuess === solution.word) {
      setIsCorrect(true);
    }
    setGuesses((prevGuess: any) => {
      let newGuesses = [...prevGuess];
      newGuesses[numberOfTurns] = formattedGuess;
      return newGuesses;
    });

    setHistoryGuesses([...historyGuesses, currentGuess]);
    setNumberOfTurns((prevTurn) => prevTurn + 1);
    setCurrentGuess("");
  };

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
      const formattedGuess = formatGuess();
      addNewGuesses(formattedGuess);
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
