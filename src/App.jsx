import "./App.css";
import Modal from "./components/Modal";
import Input from "./components/Input";
import ScrollSpy from "./components/ScrollSpy";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Modal />
      <hr />
      <Input />
      <ScrollSpy />
    </div>
  );
}

export default App;
