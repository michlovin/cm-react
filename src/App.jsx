import { useReducer } from "react";
import { reducer, actions } from "./store/reducer";
import "./App.css";

const initialState = {
  fname: "",
  lname: "",
  address: "",
  phone: "",
  email: "",
  question1: "",
  description: "",
};

export default function App() {
  const [values, dispatch] = useReducer(reducer, initialState);

  function updateValues(event) {
    dispatch({
      type: actions.UPDATE_VALUES,
      payload: { [event.target.id]: event.target.value },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(values, null, 2));
  }

  function handleReset(event) {
    event.preventDefault();
    dispatch({
      type: actions.SET,
      payload: initialState,
    });
  }

  return (
    <>
      <div className="App">
        <h1>Pet Adoption Form</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label htmlfor="fname" values={values.fname}>
            First name:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_VALUES",
                payload: { fname: e.target.value },
              })
            }
          />
          <br />
          <label htmlfor="lname" values={values.lname}>
            Last name:
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_VALUES",
                payload: { lname: e.target.value },
              })
            }
          />
          <br />
          <label htmlfor="address" values={values.address}>
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_VALUES",
                payload: { address: e.target.value },
              })
            }
          />
          <br />
          <label htmlfor="phone" values={values.phone}>
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_VALUES",
                payload: { phone: e.target.value },
              })
            }
          />
          <br />
          <label htmlfor="email" values={values.email}>
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_VALUES",
                payload: { email: e.target.value },
              })
            }
          />
          <br />
          <label htmlfor="question1" values={values.question1}>
            Have you owned a pet before?:
          </label>
          <input
            type="text"
            id="question1"
            name="question1"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_VALUES",
                payload: { question1: e.target.value },
              })
            }
          />
          <br />
          <label htmlfor="description" values={values.description}>
            Description:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Write why you are a good fit for a pet.."
            rows="10"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_VALUES",
                payload: { description: e.target.value },
              })
            }
          />
          <fieldset>
            <legend>What kind of pet are you looking for?</legend>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="coding"
                  name="interest"
                  value="coding"
                />
                Cat
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                Dog
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" id="art" name="interest" value="art" />
                Rabbit
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="sports"
                  name="interest"
                  value="sports"
                />
                Bird
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="cooking"
                  name="interest"
                  value="cooking"
                />
                Fish or Reptiles
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  id="other"
                  name="interest"
                  value="other"
                />
                Other
              </label>
              <input
                type="text"
                id="otherValue"
                name="other"
                aria-label="Other interest"
              />
            </div>
          </fieldset>
          <br />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>
      ;
    </>
  );
}
