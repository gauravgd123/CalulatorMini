import styles from "./App.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import { useState } from "react";


function App() {
  
  const [calVal, setCalVal] = useState("56");
  const onButtonClick =(buttonText)=>{
    if(buttonText === 'C'){
      setCalVal("");
    }
    else if(buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText; 
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <Buttons onButtonClick={onButtonClick} />
    </div>

  );
}

export default App;
