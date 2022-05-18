import React from "react";
import Solution from "../../types/Solution";

type ModalProps = {
  isCorrect: boolean;
  numberOfTurns: number;
  solution: Solution;
};
const Model: React.FC<ModalProps> = ({
  isCorrect,
  numberOfTurns,
  solution,
}) => {
  const word = numberOfTurns === 1 ? "guess" : "guesses";
  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <h1>You Won! 🚀</h1>
          <p className="solution">{solution.word}</p>
          <p>
            You found the solution in {numberOfTurns} {word} 🤸‍♂️
          </p>
        </div>
      ) : (
        <div>
          <h1>Oh no! 🥺</h1>
          <p className="solution">{solution.word}</p>
          <p>Better luck next time 🤓</p>
        </div>
      )}
      {}
    </div>
  );
};

export default Model;
