import styled from "styled-components";
import CountryCard from "./CountryCard";

export default function MainSection(props) {
  return (
    <Main>
      {props.fetched &&
        props.data.map((country) => {
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
        })}
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
