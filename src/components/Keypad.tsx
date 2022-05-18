import React, { useState, useEffect } from "react";
import Keys from "../../types/Keys";

type PropsKeys = {
  usedKeys: Keys | any;
};

const Keypad: React.FC<PropsKeys> = ({ usedKeys }) => {
  const [letters, setLetters] = useState<Array<Keys>>([]);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((data) => setLetters(data));
  }, []);

  return (
    <div className="keypad">
      {letters?.map((letter: Keys) => {
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
