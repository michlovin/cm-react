import React from "react";
import Header from "./components/Header/header.jsx";

const data = {
  seriesNumber: "11",
  title: "Norway",
  mainNav: [],
  subNav: [],
  coverImage: "",
  footerText: "",
};

function App() {
  return (
    <>
      <header>
        <Header seriesNumber={data.seriesNumber} title={data.title} />
      </header>

      <nav>
        <ul>
          <li>
            <a href="#">one</a>
            <a href="#">one</a>
            <a href="#">one</a>
            <a href="#">one</a>
            <a href="#">one</a>
          </li>
        </ul>
      </nav>

      <ul>
        <li>
          <a href="#">one</a>
          <a href="#">one</a>
          <a href="#">one</a>
          <a href="#">one</a>
          <a href="#">one</a>
        </li>
      </ul>
      <main>
        <image src="https://www.diesel-plus.com/wp-content/uploads/2019/07/Airplane-Sky-201811-001-720x475.jpg"></image>
      </main>
      <footer>
        <blockquote>HELLO HELLO HELOO</blockquote>
      </footer>
    </>
  );
}
export default App;
