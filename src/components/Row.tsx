import React from "react";
import PropsRow from "../../types/PropsRow";
import Guesses from "../../types/Guesses";

const Row: React.FC<PropsRow> = ({ guesses, currentGuess }) => {
  if (guesses) {
    return (
      <div className="row past">
        {guesses.map((letter: Guesses, index: any) => (
          <div key={index} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    return (
      <div className="row current">
        {currentGuess.split("").map((letter: string, index: any) => (
          <div key={index} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - currentGuess.length)].map((_, i: any) => (
          <div key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
