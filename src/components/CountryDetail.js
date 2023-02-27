import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../images/arrow-back.png";

export default function CountryDetail(props) {
  let { countryName } = useParams();
  let navigate = useNavigate();
  let countryDetailInfo = props.data.find((country) => {
    return country.name.common == countryName;
  }); //აქ ვპოულობ რომელი ქარდის detail ღილაკზეც მოხდა კლიკი

  console.log(countryDetailInfo);
  return (
    <DetailSection>
      <BackButton onClick={() => navigate("/")}>
        <img src={arrow} alt="" />
        Back
      </BackButton>
    </DetailSection>
  );
}

const DetailSection = styled.section`
  width: 90%;
  margin: 90px auto;
`;
const BackButton = styled.button`
  width: 136px;
  height: 40px;
  border: none;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 300;
  font-size: 16px;
  color: #111517;
`;
