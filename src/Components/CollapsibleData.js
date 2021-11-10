import * as React from "react";
import styled from "styled-components";

export default function BasicTable({ planets }) {
  return (
    <Body>
      <Table>
        <HeaderRow>
          <TableHeader>Planet Name</TableHeader>
          <TableHeader>
            Rorarion <br /> period
          </TableHeader>
          <TableHeader>
            Orbital <br /> period
          </TableHeader>
          <TableHeader>Diameter</TableHeader>
          <TableHeader>Climate</TableHeader>
          <TableHeader>
            Surface <br /> water
          </TableHeader>
          <TableHeader>Population</TableHeader>
        </HeaderRow>
        {planets &&
          planets.map((planet) => (
            <DataRow key={planet.name}>
              <TableData>{planet.name}</TableData>
              <TableData>{planet.rotationPeriod}</TableData>
              <TableData>{planet.orbitalPeriod}</TableData>
              <TableData>{planet.diameter}</TableData>
              <TableData>{planet.climates}</TableData>
              <TableData>{planet.surfaceWater}</TableData>
              <TableData>{planet.population}</TableData>
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
`;

const Table = styled.table`
  font-size: 1.5rem;
  width: 100%;
`;

const DataRow = styled.tr`
  *:first-child {
    text-align: left;
  }
`;

const HeaderRow = styled.tr`
  *:first-child {
    text-align: left;
  }
`;

const TableHeader = styled.th`
  padding: 1rem 0;
  text-align: right;
  vertical-align: middle;

  *:first-child {
    text-align: left;
  }
`;
const TableData = styled.td`
  padding: 0.5rem 0;
  text-align: right;
`;
