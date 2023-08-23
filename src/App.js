import React from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

function App() {
  const [userInput, setUserInput] = React.useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  let yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form onCalculate={calculateHandler} />
      {!userInput ? (
        <p
          style={{
            textAlign: "center",
            color: "salmon",
            fontFamily: "Roboto Condensed",
          }}
        >
          Nothing to calculate yet
        </p>
      ) : (
        <Table items={yearlyData} initInvest={userInput["current-savings"]} />
      )}
    </div>
  );
}

export default App;
