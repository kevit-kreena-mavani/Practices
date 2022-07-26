import { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>Hello world!</h1>
      {!changeText && <Output>It's good to see you here!!</Output>}
      {changeText && <p>Changed!!</p>}
      <button onClick={changeTextHandler}>Change Text !!</button>
    </div>
  );
};

export default Greetings;
