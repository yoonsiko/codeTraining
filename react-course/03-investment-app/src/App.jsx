import Header from "./components/Header.jsx";
import Userinput from "./components/Userinput.jsx";
import Result from "./components/Result.jsx";

import { useState } from "react";


function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = inputData.duration >= 1;

  function handleChange(inputId, newValue) {
    setInputData(prevInputData => {
      return {
        ...prevInputData,
        [inputId]: +newValue,
      }
    })
  }


  return (
    <>
      <Header>Investment calculator</Header>
      <Userinput onChange={handleChange} inputData={inputData} />
      {inputIsValid ? <Result input={inputData} /> : <p className="center">Please enter a duration greater than zero.</p>}
    </>
  )
}

export default App
