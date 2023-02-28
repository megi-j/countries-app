import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BackButton(props) {
  let navigate = useNavigate();
  return (
    <BackBtn isClickedMode={props.isClickedMode} onClick={() => navigate("/")}>
      <svg
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
          fill={props.isClickedMode ? "#fff" : "#111517"}
        />
      </svg>
      Back
    </BackBtn>
  );
}

const BackBtn = styled.button`
  width: 136px;
  height: 40px;
  border: none;
  background-color: ${(props) => (props.isClickedMode ? "#2B3844" : "#fff")};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 300;
  font-size: 16px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
  cursor: pointer;
  @media (max-width: 400px) {
    width: 104px;
    height: 36px;
    font-size: 14px;
  }
`;
