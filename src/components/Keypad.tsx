import React from "react";
import Keys from "../../types/Keys";
import { letters } from "../data/db.js";

type PropsKeys = {
  usedKeys: Keys | any;
};

const Keypad: React.FC<PropsKeys> = ({ usedKeys }) => {
  return (
    <div className="keypad">
      {letters.map((letter: Keys) => {
        const color = usedKeys && usedKeys[letter.key];
        return (
          <div key={letter.key} className={color}>
            {letter.key}
          </div>
        );
      })}
    </div>
  );
};

export default Keypad;
