import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {

  //   console.log("Hello");

  // }, []);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>

      <button onClick={() => setCount(count + 1)}>Plus 1</button>

      <p>{count}</p>
    </div>
  );
}
