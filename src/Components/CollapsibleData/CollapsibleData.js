import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export default function BasicTable({ planets, id }) {
  const [sortName, setSortName] = useState("asc");
  const [sortRotationPeriod, setSortRotationPeriod] = useState("asc");
  const [sortOrbitelPeriod, setSortOrbitalPeriod] = useState("asc");
  const [sortDiameter, setSortDiameter] = useState("asc");
  const [sortClimates, setSortClimates] = useState("asc");
  const [sortSurfaceWater, setSortSurfaceWater] = useState("asc");
  const [sortPopulation, setSortPopulation] = useState("asc");

  const browser = useMediaQuery({ query: "(min-width: 630px)" });
  const mobile = useMediaQuery({ query: "(max-width: 629px)" });

  useEffect(() => {
    planets.sort((a, b) => {
      const isReversed = sortName === "asc" ? 1 : -1;
      return isReversed * a.name.localeCompare(b.name);
    });
  }, [planets, sortName]);

  useEffect(() => {
    planets.sort((a, b) =>
      sortRotationPeriod === "asc"
        ? b.rotationPeriod - a.rotationPeriod
        : a.rotationPeriod - b.rotationPeriod
    );
  }, [planets, sortRotationPeriod]);

  useEffect(() => {
    planets.sort((a, b) =>
      sortOrbitelPeriod === "asc"
        ? b.orbitalPeriod - a.orbitalPeriod
        : a.orbitalPeriod - b.orbitalPeriod
    );
  }, [planets, sortOrbitelPeriod]);

  useEffect(() => {
    planets.sort((a, b) =>
      sortDiameter === "asc" ? b.diameter - a.diameter : a.diameter - b.diameter
    );
  }, [planets, sortDiameter]);

  useEffect(() => {
    planets.sort((a, b) => {
      const isReversed = sortClimates === "asc" ? 1 : -1;
      return isReversed * a.climates[0].localeCompare(b.climates[0]);
    });
  }, [planets, sortClimates]);

  useEffect(() => {
    planets.sort((a, b) =>
      sortSurfaceWater === "asc"
        ? b.surfaceWater - a.surfaceWater
        : a.surfaceWater - b.surfaceWater
    );
  }, [planets, sortSurfaceWater]);

  useEffect(() => {
    planets.sort((a, b) =>
      sortPopulation === "asc"
        ? b.population - a.population
        : a.population - b.population
    );
  }, [planets, sortPopulation]);

  return (
    <div>
      {browser && (
        <BrowserBody>
          <Table>
            <HeaderRow>
              <tr>
                <th
                  style={{ color: "rgb(0, 104, 127)" }}
                  onClick={() => {
                    setSortName(sortName === "asc" ? "dsc" : "asc");
                  }}
                >
                  Planet Name{" "}
                </th>
                <th
                  onClick={() => {
                    setSortRotationPeriod(
                      sortRotationPeriod === "asc" ? "dsc" : "asc"
                    );
                  }}
                >
                  Rorarion <br /> period
                </th>
                <th
                  onClick={() => {
                    setSortOrbitalPeriod(
                      sortOrbitelPeriod === "asc" ? "dsc" : "asc"
                    );
                  }}
                >
                  Orbital <br /> period
                </th>
                <th
                  onClick={() => {
                    setSortDiameter(sortDiameter === "asc" ? "dsc" : "asc");
                  }}
                >
                  Diameter
                </th>
                <th
                  onClick={() => {
                    setSortClimates(sortClimates === "asc" ? "dsc" : "asc");
                  }}
                >
                  Climate
                </th>
                <th
                  onClick={() => {
                    setSortSurfaceWater(
                      sortSurfaceWater === "asc" ? "dsc" : "asc"
                    );
                  }}
                >
                  Surface <br /> water
                </th>
                <th
                  onClick={() => {
                    setSortPopulation(sortPopulation === "asc" ? "dsc" : "asc");
                  }}
                >
                  Population
                </th>
              </tr>
            </HeaderRow>
            {planets
              .filter((tmpPlanet) =>
                tmpPlanet.filmConnection.films.find((film) => film.id === id)
              )
              .map((planet) => (
                <DataRow key={planet.name}>
                  <tr>
                    <td style={{ color: "rgb(0, 104, 127)" }}>{planet.name}</td>
                    <td>{planet.rotationPeriod}</td>
                    <td>{planet.orbitalPeriod}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climates}</td>
                    <td>{planet.surfaceWater}</td>
                    <td>{planet.population}</td>
                  </tr>
                </DataRow>
              ))}
          </Table>
        </BrowserBody>
      )}
      {mobile && (
        <MobileBody>
          {planets
            .filter((tmpPlanet) =>
              tmpPlanet.filmConnection.films.find((film) => film.id === id)
            )
            .map((planet) => (
              <Table2 key={planet.name}>
                <div>
                  <p>Planet Name</p> <span>{planet.name}</span>
                </div>
                <div>
                  <p>
                    Rorarion <br /> period
                  </p>
                  <p>{planet.rotationPeriod}</p>
                </div>
                <div>
                  <p>
                    Orbital <br /> period
                  </p>
                  <p>{planet.orbitalPeriod}</p>
                </div>
                <div>
                  <p>Diameter </p>
                  <p>{planet.diameter}</p>
                </div>
                <div>
                  <p>Climate</p>
                  <p>{planet.climates}</p>
                </div>
                <div>
                  <p>
                    Surface
                    <br /> water{" "}
                  </p>
                  <p>{planet.surfaceWater}</p>
                </div>
                <div>
                  <p>Population</p>
                  <p>{planet.population}</p>
                </div>
              </Table2>
            ))}
        </MobileBody>
      )}
    </div>
  );
}

const BrowserBody = styled.div`
  width: initial;
  height: auto;
  padding: 2rem;
  border-radius: 0 0 0.4rem 0.4rem;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Table = styled.table`
  font-size: 1.5rem;
  width: 100%;

  span {
    color: rgb(0, 104, 127);
    font-weight: bold;
  }
`;

const DataRow = styled.tbody`
  *:first-child {
    text-align: left;
  }

  td {
    padding: 1rem 0.5rem;
    text-align: right;
    vertical-align: middle;
  }
  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const HeaderRow = styled.thead`
  *:first-child {
    text-align: left;
  }
  th {
    padding: 1rem 0;
    text-align: right;
    vertical-align: middle;
    cursor: pointer;

    *:first-child {
      text-align: left;
    }
  }
`;

const MobileBody = styled.div`
  width: initial;
  display: block;
  height: auto;

  border-radius: 0 0 0.4rem 0.4rem;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Table2 = styled.div`
  display: block;
  padding: 2rem;
  margin: 0 auto;
  margin-bottom: 2rem;

  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  div {
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
  }
`;
