import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";

import style from "./App.module.css";

function App() {



  return (
    <div className={style.calculator}>
      <Display></Display>
      <BtnContainer></BtnContainer>
    </div>
  )
}

export default App
