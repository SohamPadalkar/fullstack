import { useState } from "react";

const Display = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
  <div>
    <table>
      <tr>
        <td>
          good
        </td>
        <td>
          {good}
        </td>
      </tr>
      <tr>
        <td>
          neutral
        </td>
        <td>
          {neutral}
        </td>
      </tr>
      <tr>
        <td>
          bad
        </td>
        <td>
          {bad}
        </td>
      </tr>
      <tr>
        <td>
          all
        </td>
        <td>
          {good + neutral + bad}
        </td>
      </tr>
      <tr>
        <td>
          average
        </td>
        <td>
          {(good*1 + bad*(-1)) / good + bad + neutral}
        </td>
      </tr>
      <tr>
        <td>
          positive
        </td>
        <td>
          {(good / (good + bad + neutral)) * 100} %
        </td>
      </tr>
    </table>
  </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    console.log("rating good, previous count", good);
    setGood(good + 1);
  };

  const increaseNeutral = () => {
    console.log("rating neutral, previous count", neutral);
    setNeutral(neutral + 1);
  };

  const increaseBad = () => {
    console.log("rating bad, previous count", bad);
    setBad(bad + 1);
  };


  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Display text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
