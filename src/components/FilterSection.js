import search from "../images/search.png";
import styled from "styled-components";
import { useState } from "react";

export default function FilterSection(props) {
  let regions = [];
  if (props.fetched) {
    props.data.filter((country) => {
      return regions.push(country.region);
    });
  }
  let uniqueRegion = regions.filter((reg, index) => {
    return regions.indexOf(reg) === index;
  });

  return (
    <FilteredSection>
      <SearchBox isClickedMode={props.isClickedMode}>
        <img src={search} alt="" />
        <SearchInput
          onInput={(e) => props.handleInput(e)}
          placeholder="Search for a country…"
          isClickedMode={props.isClickedMode}
        />
      </SearchBox>
      <FilterBox isClickedMode={props.isClickedMode}>
        <Select
          name=""
          id=""
          onChange={(e) => props.handleChange(e)}
          isClickedMode={props.isClickedMode}
        >
          <option value="" selected>
            Filter by Region
          </option>
          {uniqueRegion.map((region) => {
            return (
              <option key={region} value={region}>
                {region}
              </option>
            );
          })}
        </Select>
      </FilterBox>
    </FilteredSection>
  );
}
const FilteredSection = styled.section`
  width: 90%;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
`;
const SearchBox = styled.div`
  max-width: 480px;
  width: 100%;
  height: 56px;
  background: ${(props) => (props.isClickedMode ? "#2B3844" : "#fff")};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  background-color: ${(props) => (props.isClickedMode ? "#2B3844" : "#fff")};
  ::placeholder {
    color: ${(props) => (props.isClickedMode ? "#fff" : "#848484")};
  }
`;

const FilterBox = styled.div`
  max-width: 200px;
  width: 100%;
  height: 56px;
  background: ${(props) => (props.isClickedMode ? "#2B3844" : "#fff")};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;
const Select = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
  background: ${(props) => (props.isClickedMode ? "#2B3844" : "#fff")};
  option {
    font-weight: 400;
    font-size: 14px;
    border: none;
    outline: none;
    background: ${(props) => (props.isClickedMode ? "#2B3844" : "#fff")};
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
  }
`;
