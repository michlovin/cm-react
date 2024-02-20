import "./App.css";
import Modal from "./components/Modal";
import Input from "./components/Input";
import ScrollSpy from "./components/ScrollSpy";
import SleepyCat from "./components/SleepyCat";

function App() {
  return (
    <div className="App">
      <h1>Lesson 3</h1>
      <Modal />
      <hr />
      <Input />
      <ScrollSpy />
      <div className="bottom">
        <SleepyCat />
      </div>
    </div>
  );
}

export default App;
