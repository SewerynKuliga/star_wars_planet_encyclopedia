import React from "react";
import styled from "styled-components";

function MobileCollapibleData({ planets, id }) {
  return (
    <Body>
      {planets
        .filter((tmpPlanet) =>
          tmpPlanet.filmConnection.films.find((film) => film.id === id)
        )
        .map((planet) => (
          <Table2 key={planet.name}>
            <Table3>
              <p>Planet Name</p> <span>{planet.name}</span>
            </Table3>
            <Table3>
              <p>
                Rorarion <br /> period
              </p>
              <p>{planet.rotationPeriod}</p>
            </Table3>
            <Table3>
              <p>
                Orbital <br /> period
              </p>
              <p>{planet.orbitalPeriod}</p>
            </Table3>
            <Table3>
              <p>Diameter </p>
              <p>{planet.diameter}</p>
            </Table3>
            <Table3>
              <p>Climate</p>
              <p>{planet.climates}</p>
            </Table3>
            <Table3>
              <p>
                Surface
                <br /> water{" "}
              </p>
              <p>{planet.surfaceWater}</p>
            </Table3>
            <Table3>
              <p>Population</p>
              <p>{planet.population}</p>
            </Table3>
          </Table2>
        ))}
    </Body>
  );
}

export default MobileCollapibleData;

const Body = styled.div`
  width: initial;
  display: none;
  height: auto;

  border-radius: 0 0 0.4rem 0.4rem;
  background-color: rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 47rem) {
    display: block;
  }
`;

const Table2 = styled.div`
  display: block;
  padding: 2rem;
  margin: 0 auto;
  margin-bottom: 2rem;

  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Table3 = styled.div`
  width: initial;
  height: initial;
  display: flex;
  justify-content: space-between;

  padding: 1rem 0;
  span {
    color: rgb(0, 104, 127);
  }
  p {
    /* vertical-align: middle; */
  }
`;
