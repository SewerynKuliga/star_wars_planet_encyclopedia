import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import LOGO from "./SVGs/LOGO.svg";
import Titles from "./Components/Films/Titles";

function App() {
  const [films, setFilms] = useState(null);
  const [planets, setPlanets] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/data",
    {
      method: "GET"
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFilms(data.films);
        setPlanets(data.planets);
        console.log(data);
      });
  }, []);

  return (
    <Body>
      <Img src={LOGO} alt="logo" />

      {films && films.map((film) => (
        <Titles title={film.title} key={film.id} planets={planets} films={films}/>
      ))}
    </Body>
  );
}

export default App;

const Body = styled.div`
  width: 80%;
  min-width: 25rem;
  height: auto;
  background-color: rgb(224, 230, 238);
  margin: 0 auto;
  margin-top: 4rem;
  padding: 4rem;
  border-radius: 0.8rem;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 60rem;
`;
