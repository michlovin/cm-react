import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {

  //   console.log("Hello");

  // }, []);

  const [movies, setMovies] = useState([]);
  const [species, setSpecies] = useState([]);

  // useEffect(() => {
  //   fetch("https://ghibliapi.vercel.app/films")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log(res);
  //       const movies = Object.values(res);
  //       setMovies(movies);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchMovies() {
      let response = await fetch("https://ghibliapi.vercel.app/films");
      response = await response.json();
      setMovies(Object.values(response));
    }
    fetchMovies();
  }, []); //why doesnt url work here?

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/species")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const species = Object.values(res);
        setSpecies(species);
      });
  }, []);

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>

      <button onClick={() => setCount(count + 1)}>Plus 1</button>

      <p>{count}</p>

      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li>
            {movie.title}: {movie.director} : {movie.release_date}:
          </li>
        ))}
      </ul>

      <h1>Species</h1>
      <ul>
        {species.map((species) => (
          <li>
            {species.name}: {species.classification}
          </li>
        ))}
      </ul>
      <h1>{time.toTimeString()}</h1>
    </div>
  );
}
