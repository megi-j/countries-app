import search from "../images/search.png";
import styled from "styled-components";

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
  console.log(uniqueRegion);
  return (
    <FilteredSection>
      <SearchBox>
        <img src={search} alt="" />
        <SearchInput placeholder="Search for a country…" />
      </SearchBox>
      <FilterBox>
        <Select name="" id="">
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
  background: #ffffff;
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
`;
const FilterBox = styled.div`
  max-width: 200px;
  width: 100%;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  // padding: 18px 24px;
`;
const Select = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 14px;
  color: #111517;

  option {
  }
`;
