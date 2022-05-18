import React, { useState, useEffect } from "react";
import Keys from "../../types/Keys";
const Keypad: React.FC = () => {
  const [letters, setLetters] = useState<Array<Keys>>([]);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((data) => setLetters(data));
  }, []);
  console.log(letters);
  return (
    <div className="keypad">
      {letters?.map((letter) => (
        <div key={letter.key}> {letter.key}</div>
      ))}
    </div>
  );
};

export default Keypad;
