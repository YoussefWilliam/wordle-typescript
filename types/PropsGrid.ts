import Guesses from "./Guesses";

type PropsGrid = {
  currentGuess: string;
  userGuesses: Array<Array<Guesses>>;
  numberOfTurns: number;
};

export default PropsGrid;
