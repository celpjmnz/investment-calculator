import react from "react";
import "./Form.css";

const emptyUser = {
  "current-savings": 0,
  "yearly-contribution": 0,
  "expected-return": 0,
  duration: 0,
};

const Form = (props) => {
  const [userInput, setUserInput] = react.useState(emptyUser);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    setUserInput(emptyUser);
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                changeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                changeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                changeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                changeHandler("duration", event.target.value)
              }
              value={userInput["duration"]}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
