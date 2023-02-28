import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import CountryDetail from "./components/CountryDetail";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import HeaderPage from "./components/HeaderPage";
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

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setFetched(true);
      setData(response.data);
    });
  }, []);

  function handleChange(e) {
    let filteredWithRegion = data.filter((country) => {
      return country.region === e.target.value;
    });

    setFilteredData(filteredWithRegion);
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

      <Routes>
        <Route
          path="/"
          element={
            <HeaderPage
              isClickedMode={isClickedMode}
              clickedMode={() => setIsClickedMode(!isClickedMode)}
            />
          }
        >
          <Route
            index
            element={
              <Home
                data={data}
                fetched={fetched}
                handleChange={handleChange}
                handleInput={handleInput}
                isClickedMode={isClickedMode}
                filteredData={filteredData}
              />
            }
          />
          <Route
            path="/:countryName"
            element={
              <CountryDetail data={data} isClickedMode={isClickedMode} />
            }
          />
        </Route>
      </Routes>
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
