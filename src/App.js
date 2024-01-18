import "./App.css";
import React, { useState } from "react";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let bmiData = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are Underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("Your BMI is normal (You are Healthy)");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="Container">
        <h1>BMI Calculator</h1>
        <form onSubmit={bmiData}>
          <div>
            <label>Weight (pounds)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>

          <div className="Center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
