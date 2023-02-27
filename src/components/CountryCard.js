import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CountryCard(props) {
  let navigate = useNavigate();
  return (
    <Card
      isClickedMode={props.isClickedMode}
      onClick={() => {
        navigate(`/${props.countryName}`);
      }}
    >
      <Flag src={props.src} alt={props.alt} />
      <CountryName isClickedMode={props.isClickedMode}>
        {props.countryName}
      </CountryName>
      <Population isClickedMode={props.isClickedMode}>
        Population: {props.population}
      </Population>
      <Region isClickedMode={props.isClickedMode}>
        Region: {props.region}
      </Region>
      <Capital isClickedMode={props.isClickedMode}>
        Capital: {props.capital}
      </Capital>
    </Card>
  );
}

const Card = styled.div`
  width: 264px;
  height: 336px;
  background: ${(props) => (props.isClickedMode ? "#2B3844" : "#fff")};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 46px;
  cursor: pointer;
`;
const Flag = styled.img`
  width: 100%;
  height: 160px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const CountryName = styled.h3`
  font-weight: 800;
  font-size: 18px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
  text-align: center;
  font-family: "Nunito Sans";
`;
const Population = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
`;
const Region = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
`;
const Capital = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
`;
