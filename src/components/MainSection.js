import styled from "styled-components";
import CountryCard from "./CountryCard";

export default function MainSection(props) {
  return (
    props.fetched && (
      <Main>
        {props.filteredData.length > 0
          ? props.filteredData.map((country) => {
              return (
                <CountryCard
                  src={country.flags.png}
                  alt={country.flags.alt}
                  countryName={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  key={country.name.common}
                />
              );
            })
          : props.data.map((country) => {
              return (
                <CountryCard
                  src={country.flags.png}
                  alt={country.flags.alt}
                  countryName={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  key={country.name.common}
                />
              );
            })}
      </Main>
    )
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
