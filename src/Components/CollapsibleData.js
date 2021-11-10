import React, { useState } from "react";
import styled from "styled-components";

export default function BasicTable({ planets }) {
    const [currentSort, setCurrentSort] = useState(null)
    const sortTypes = {
        up: {
            class: 'sort-up',
            fn: (a, b) => a.net_worth - b.net_worth
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.net_worth - a.net_worth
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    }

    const onSortChange = () => {
		let nextSort;
		
		if(currentSort === 'down') nextSort = 'up';
		else if(currentSort === 'up') nextSort = 'default';
		else if(currentSort === 'default') nextSort = 'down';
		
		setCurrentSort(nextSort)
	}

  return (
    <Body>
      <Table>
        <HeaderRow>
          <tr>
            <th>Planet Name </th>
            <th>
              Rorarion <br /> period
            </th>
            <th>
              Orbital <br /> period
            </th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>
              Surface <br /> water
            </th>
            <th>Population</th>
          </tr>
        </HeaderRow>
        {planets &&
          planets.map((planet) => (
            <DataRow key={planet.name}>
              <tr>
                <td>{planet.name}</td>
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
`;

const Table = styled.table`
  font-size: 1.5rem;
  width: 100%;
`;

const DataRow = styled.tbody`
  *:first-child {
    text-align: left;
  }

  td {
    padding: 0.5rem 0;
    text-align: right;
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

    *:first-child {
      text-align: left;
    }
  }
`;
