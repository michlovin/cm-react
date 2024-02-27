import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_VALUES":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_VALUES":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  fname: "",
  lname: "",
  favColour: "",
};

export default function App() {
  const [values, dispatch] = useReducer(reducer, initialState);
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted");
  }
  return (
    <>
      <div className="App">
        <h1>Hello</h1>
        <form onSubmit={handleSubmit}>
          <label htmlfor="fname" values={values.fname}>
            First name:
          </label>
          <input type="text" id="fname" name="fname" />
          <br />
          <label htmlfor="lname" values={values.lname}>
            Last name:
          </label>
          <input type="text" id="lname" name="lname" />
          <br />
          <label htmlfor="favColour" values={values.favColour}>
            Favorite color:
          </label>
          <input type="text" id="favColour" name="favColour" />
          <button type="submit">Submit</button>
        </form>
      </div>
      ;
    </>
  );
}
