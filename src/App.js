import styled, { createGlobalStyle } from "styled-components";
import moon from "./images/moon.png";
import { Helmet } from "react-helmet";
import FilterSection from "./components/FilterSection";
import { useEffect, useState } from "react";
import axios from "axios";
import MainSection from "./components/MainSection";

const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style-type: none;
      text-decoration: none;
  }
  html{
    font-family: "Nunito Sans";
  }
`;
function App() {
  const [data, setData] = useState();
  const [fetched, setFetched] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [isClickedMode, setIsClickedMode] = useState(false);
  // const [filterClicked, setFilterClicked] = useState(false);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setFetched(true);
      setData(response.data);
    });
  }, []);

  function handleChange(e) {
    // setFilterClicked(true);
    let filteredWithRegion = data.filter((country) => {
      return country.region === e.target.value;
    });

    setFilteredData(filteredWithRegion);
    console.log(filteredWithRegion);
  }
  function handleInput(e) {
    let filteredWithName = data.filter((country) => {
      return country.name.common.toLowerCase() === e.target.value.toLowerCase();
    });
    console.log(filteredWithName);
    setFilteredData(filteredWithName);
  }
  return (
    <Container isClickedMode={isClickedMode}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header isClickedMode={isClickedMode}>
        <Title isClickedMode={isClickedMode}>Where in the world?</Title>
        <ModeBox onClick={() => setIsClickedMode(!isClickedMode)}>
          <img src={moon} alt="" />
          <ModeText isClickedMode={isClickedMode}>Dark Mode</ModeText>
        </ModeBox>
      </Header>
      <FilterSection
        data={data}
        fetched={fetched}
        handleChange={handleChange}
        handleInput={handleInput}
        isClickedMode={isClickedMode}
      />
      <MainSection
        data={data}
        fetched={fetched}
        filteredData={filteredData}
        // filterClicked={filterClicked}
        isClickedMode={isClickedMode}
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background: ${(props) => (props.isClickedMode ? "#202C36" : "#fafafa")};
`;
const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  background-color: ${(props) => (props.isClickedMode ? "#2B3844" : "#FFFFFF")};
`;
const Title = styled.h2`
  font-weight: 800;
  font-size: 24px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
`;
const ModeBox = styled.div`
  width: 108px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const ModeText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
`;
