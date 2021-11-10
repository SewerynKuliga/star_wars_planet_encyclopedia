import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function BasicTable({ planets }) {
  const [sortName, setSortName] = useState("asc");
  const [sortedRotationPeriod, setSortrotationPeriod] = useState("asc");
  const [sortedOrbitelPeriod, setSortedOrbitalPeriod] = useState("asc");
  const [sortDiameter, setSortDiameter] = useState("asc");
  const [sortClimates, setSortClimates] = useState("asc");
  const [sortSurfaceWater, setSortSurfaceWater] = useState("asc");
  const [sortPopulation, setSortPopulation] = useState("asc");

  useEffect(() => {
    planets.sort((a, b) => {
      const isReversed = sortName === "asc" ? 1 : -1;
      return isReversed * a.name.localeCompare(b.name);
    });
  }, [planets, sortName]);

  useEffect(() => {
    planets.sort((a, b) => {
      if (sortedRotationPeriod === "asc") {
        return b.rotationPeriod - a.rotationPeriod;
      } else {
        return a.rotationPeriod - b.rotationPeriod;
      }
    });
  }, [planets, sortedRotationPeriod]);

  useEffect(() => {
    planets.sort((a, b) => {
      if (sortedOrbitelPeriod === "asc") {
        return b.orbitalPeriod - a.orbitalPeriod;
      } else {
        return a.orbitalPeriod - b.orbitalPeriod;
      }
    });
  }, [planets, sortedOrbitelPeriod]);

  useEffect(() => {
    planets.sort((a, b) => {
      if (sortDiameter === "asc") {
        return b.diameter - a.diameter;
      } else {
        return a.diameter - b.diameter;
      }
    });
  }, [planets, sortDiameter]);

  useEffect(() => {
    planets.sort((a, b) => {
      const isReversed = sortClimates === "asc" ? 1 : -1;
      return isReversed * a.climates[0].localeCompare(b.climates[0]);
    });
  }, [planets, sortClimates]);

  useEffect(() => {
    planets.sort((a, b) => {
      if (sortSurfaceWater === "asc") {
        return b.surfaceWater - a.surfaceWater;
      } else {
        return a.surfaceWater - b.surfaceWater;
      }
    });
  }, [planets, sortSurfaceWater]);

  useEffect(() => {
    planets.sort((a, b) => {
      if (sortPopulation === "asc") {
        return b.population - a.population;
      } else {
        return a.population - b.population;
      }
    });
  }, [planets, sortPopulation]);

  return (
    <Body>
      <Table>
        <HeaderRow>
          <tr>
            <th
              style={{ color: "rgb(0, 104, 127)" }}
              onClick={() => {
                setSortName(sortName === "desc" ? "asc" : "desc");
              }}
            >
              Planet Name{" "}
            </th>
            <th
              onClick={() => {
                setSortrotationPeriod(
                  sortedRotationPeriod === "asc" ? "dsc" : "asc"
                );
              }}
            >
              Rorarion <br /> period
            </th>
            <th
              onClick={() => {
                setSortedOrbitalPeriod(
                  sortedOrbitelPeriod === "asc" ? "dsc" : "asc"
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
                setSortSurfaceWater(sortSurfaceWater === "asc" ? "dsc" : "asc");
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
        {planets &&
          planets.map((planet) => (
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
    </Body>
  );
}

const Body = styled.div`
  width: initial;
  height: auto;
  padding: 2rem;
  border-radius: 0 0 0.4rem 0.4rem;
  background-color: rgba(0, 0, 0, 0.05);
  min-width: 47rem;
  @media screen and (max-width: 47rem) {
    display: none;
  }
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
    padding: 0.5rem;
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
