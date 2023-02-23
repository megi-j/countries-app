import React from "react";
import styled from "styled-components";

export default function CountryCard(props) {
  return (
    <Card>
      <Flag src={props.src} alt={props.alt} />
      <CountryName>{props.countryName}</CountryName>
      <Population>Population: {props.population}</Population>
      <Region>Region: {props.region}</Region>
      <Capital>Capital: {props.capital}</Capital>
    </Card>
  );
}

const Card = styled.div`
  width: 264px;
  height: 336px;
  background: #ffffff;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 46px;
`;
const Flag = styled.img`
  width: 100%;
  height: 160px;
`;
const CountryName = styled.h3`
  font-weight: 800;
  font-size: 18px;
  color: #111517;
  text-align: center;
`;
const Population = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #111517;
`;
const Region = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #111517;
`;
const Capital = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #111517;
`;
