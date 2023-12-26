import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
import style from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={style.calculator}>
      <Display displayValue={calVal}></Display>
      <BtnContainer onButtonClick={onButtonClick}></BtnContainer>
    </div>
  );
}

export default App;
