import moon from "../images/moon.png";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
export default function HeaderPage(props) {
  return (
    <>
      <Header isClickedMode={props.isClickedMode}>
        <HeaderInsideBox>
          <Title isClickedMode={props.isClickedMode}>Where in the world?</Title>
          <ModeBox onClick={props.clickedMode}>
            {/* {() => props.setIsClickedMode(!props.isClickedMode)} */}

            <img src={moon} alt="" />
            <ModeText isClickedMode={props.isClickedMode}>Dark Mode</ModeText>
          </ModeBox>
        </HeaderInsideBox>
      </Header>
      <Outlet />
    </>
  );
}
const Header = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  background-color: ${(props) => (props.isClickedMode ? "#2B3844" : "#FFFFFF")};
`;
const HeaderInsideBox = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
