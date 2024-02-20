import { useEffect, useRef } from "react";
import "./index.css";

export default () => {
  const ref = useRef();
  //   useEffect(() => {
  //     // const modal = document.querySelector("dialog");
  //     // console.log("sel", modal);
  //     console.dir("ref", ref.current);
  //   }, []);

  return (
    <>
      <button className="nutty-button" onClick={() => ref.current.showModal()}>
        Open Me
      </button>
      <dialog ref={ref} onClose={() => console.log(ref.current.returnValue)}>
        <h3>Modal</h3>
        <p>This is a modal This is a modal This is a modal</p>
        <form method="dialog">
          <button className="unhinged-button" value="cancel">
            Cancel
          </button>
          <button value="submit">Submit</button>
        </form>
      </dialog>
    </>
  );
};
