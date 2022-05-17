import React from "react";
import Guesses from "../../types/Guesses";
import PropsGrid from "../../types/PropsGrid";

import Row from "./Row";

const Grid: React.FC<PropsGrid> = ({
  currentGuess,
  userGuesses,
  numberOfTurns,
}) => {
  return (
    <div>
      {userGuesses.map((guesses: Array<Guesses>, i: any) => {
        if (numberOfTurns === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guesses={guesses} />;
      })}
    </div>
  );
};

export default Grid;
