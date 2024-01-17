import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  //increment

  function add() {
    setCount(count + 10);
  }

  //decrement

  function subtract() {
    setCount(count - 10);
  }

  //handleChange

  const [wordName, setWord] = useState({
    word: "",
  });

  const [nameMood, setNameMood] = useState({
    name: "",

    mood: "",
  });

  //create a function to show and hide a word the use it with an or statement on the inpput

  const handleChange = (event) => {
    let value = event.target.value;

    let nameMood = event.target.name;

    let wordName = event.target.word;

    setCount(+event.target.value);

    setNameMood((prevalue) => {
      return {
        ...prevalue, // Spread Operator

        [nameMood]: value,
      };
    });

    setWord((is) => {
      return {
        ...is,

        [wordName]: value,
      };
    });
  };

  return (
    <div className="container">
      <div>
        <h1>Hello</h1>

        <h2>Start clicking to see some magic happen!</h2>

        {/* <button onClick={subtract}>&lt; less than</button>

        <span>{count}</span>

        <button onClick={add}>&gt; greater than</button> */}
      </div>

      <div className="container">
        <button onClick={subtract}>&lt; less than</button>

        <input type="number" value={count} onchange={handleChange}></input>

        <button onClick={add}>&gt; greater than</button>
      </div>

      <div className="container">
        <form>
          <div>
            <h1>
              Hello <span style={{ color: "red" }}>{nameMood.name} </span>
              <span> {wordName.word}</span>
              <span style={{ color: "green" }}>{nameMood.mood}</span>
            </h1>
            Hey
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
              name="name"
            />
            How you feeling?
            <input
              type="text"
              placeholder="Enter Your Mood"
              onChange={handleChange}
              name="mood"
            />
            <div
              type="text"
              placeholder="is"
              onChange={handleChange}
              name="mood"
            ></div>
          </div>
        </form>
      </div>
    </div>
  );
}
