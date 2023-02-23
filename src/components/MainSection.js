import styled from "styled-components";
import CountryCard from "./CountryCard";

export default function MainSection(props) {
  console.log(props.filteredData.length);
  return (
    <Main>
      {props.fetched && props.filterClicked
        ? props.filteredData.map((country) => {
            return (
              <CountryCard
                src={country.flags.png}
                alt={country.flags.alt}
                countryName={country.name.official}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            );
          })
        : (props.fetched && !props.filterClicked) ||
          (props.fetched &&
            props.filterClicked &&
            props.filteredData.length == 0)
        ? props.data.map((country) => {
            return (
              <CountryCard
                src={country.flags.png}
                alt={country.flags.alt}
                countryName={country.name.official}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            );
          })
        : null}
    </Main>
  );
}
const Main = styled.section`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
`;
