import React, { useState } from "react";
import styled from "styled-components";
import arrowOpen from "../../SVGs/arrowOpen.svg";
import arrowClose from "../../SVGs/arrowClose.svg";
import CollapsibleData from "../CollapsibleData";

function Films({ title, planets }) {
  const [visible, setVisible] = useState(false);
  const collData = <CollapsibleData planets={planets} />;
  return (
    <Body>
      <Title onClick={() => setVisible(!visible)}>
        <span>{title}</span>
        {visible ? (
          <img src={arrowClose} alt="" />
        ) : (
          <img src={arrowOpen} alt="" />
        )}
      </Title>
      {visible ? collData : null}
    </Body>
  );
}

export default Films;

const Body = styled.div`
  font-size: 2rem;
  background-color: #fff;
  border-radius: 0.4rem;
  margin: 2rem;

  span {
    color: rgb(0, 104, 127);
    font-family: "Barlow", sans-serif;
    font-weight: bold;
  }
`;

const Title = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
