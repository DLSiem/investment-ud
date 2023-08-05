import { useState } from "react";

const initialData = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: ""
};

const UserInput = (props) => {
  const [input, setInput] = useState(initialData);

  const handleChange = (inputType, value) => {
    setInput((prev) => {
      return {
        ...prev,
        [inputType]: value
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(input);
  };

  const handleReset = () => {
    setInput(initialData);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              handleChange("current-savings", event.target.value)
            }
            value={input["current-savings"]}
            type="number"
            id="current-savings"
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              handleChange("yearly-contribution", event.target.value)
            }
            value={input["yearly-contribution"]}
            required
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
              handleChange("expected-return", event.target.value)
            }
            value={input["expected-return"]}
            type="number"
            id="expected-return"
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => handleChange("duration", event.target.value)}
            value={input.duration}
            type="number"
            id="duration"
            required
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={handleReset} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
