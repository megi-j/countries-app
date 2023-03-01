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
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill={props.isClickedMode ? "#fff" : "#848484"}
          />
        </svg>

        <SearchInput
          onInput={(e) => props.handleInput(e)}
          placeholder="Search for a country…"
          isClickedMode={props.isClickedMode}
          onChange={(e) => props.change(e)}
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
  margin: 48px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
    margin: 24px auto;
  }
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
  @media (max-width: 400px) {
    margin-bottom: 40px;
    height: 48px;
  }
`;
const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#848484")};
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
  @media (max-width: 400px) {
    height: 48px;
    padding-right: 10px;
  }
`;
const Select = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  padding: 18px 24px;
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

  @media (max-width: 400px) {
    font-size: 12px;
    padding: 14px 24px;
    option {
      font-size: 12px;
    }
  }
`;
