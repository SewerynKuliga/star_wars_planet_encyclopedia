import React, { useState } from "react";
import styled from "styled-components";
import arrowOpen from "../../SVGs/arrowOpen.svg";
import arrowClose from "../../SVGs/arrowClose.svg";
import CollapsibleData from "../CollapsibleData";
import MobileCollapibleData from "../MobileCollapibleData";

function Films({ title, planets }) {
  const [visible, setVisible] = useState(false);
  const collData = <CollapsibleData planets={planets} />;
  const mobileCollData = <MobileCollapibleData planets={planets} />;
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
      {visible ? <div>{collData} {mobileCollData}</div> : null}
    </Body>
  );
}

export default Films;

const Body = styled.div`
  font-size: 2rem;
  background-color: #fff;
  border-radius: 0.4rem;
  margin: 2rem;
  min-width: 220px;
  @media screen and (max-width: 47rem) {
    margin: 0;
    margin-top: 2rem;
  }
  
`;

const Title = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  span {
    color: rgb(0, 104, 127);
    font-weight: bold;
  }
`;