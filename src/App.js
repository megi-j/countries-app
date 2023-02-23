import styled, { createGlobalStyle } from "styled-components";
import moon from "./images/moon.png";
import { Helmet } from "react-helmet";
import FilterSection from "./components/FilterSection";
import { useEffect, useState } from "react";
import axios from "axios";

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
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setFetched(true);
      setData(response.data);
    });
  }, []);
  return (
    <Container>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header>
        <Title>Where in the world?</Title>
        <ModeBox>
          <img src={moon} alt="" />
          <ModeText>Dark Mode</ModeText>
        </ModeBox>
      </Header>
      <FilterSection data={data} fetched={fetched} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background: #fafafa;
`;
const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`;
const Title = styled.h2`
  font-weight: 800;
  font-size: 24px;
  color: #111517;
`;
const ModeBox = styled.div`
  width: 108px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ModeText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #111517;
`;
