import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../images/arrow-back.png";

export default function CountryDetail(props) {
  let { countryName } = useParams();
  let navigate = useNavigate();
  let countryDetailInfo = props.data.find((country) => {
    return country.name.common == countryName;
  }); //აქ ვპოულობ რომელი ქარდის detail ღილაკზეც მოხდა კლიკი

  let nameArray = Object.entries(countryDetailInfo.name.nativeName);
  let currency = Object.entries(countryDetailInfo.currencies);
  let languages = Object.entries(countryDetailInfo.languages);

  // let borders = props.data.filter((item) => {
  //   countryDetailInfo.borders.map((el) => {
  //     if (el == item.fifa) {
  //       return console.log(item.name.common);
  //     }
  //   });
  // return console.log(item.name.common);
  // });

  // console.log(borders);
  console.log(countryDetailInfo.fifa);
  return (
    <DetailSection>
      <BackButton onClick={() => navigate("/")}>
        <img src={arrow} alt="" />
        Back
      </BackButton>
      <DetailInfo>
        <Flag
          src={countryDetailInfo.flags.png}
          alt={countryDetailInfo.flags.alt}
        />
        <MoreInfoBox>
          <CountryName>{countryDetailInfo.name.common}</CountryName>
          <Wrapper>
            <MoreInfo>
              <MoreInfoText>Native Name: {nameArray[0][1].common}</MoreInfoText>
              <MoreInfoText>
                Population: {countryDetailInfo.population}
              </MoreInfoText>
              <MoreInfoText>Region: {countryDetailInfo.region}</MoreInfoText>
              <MoreInfoText>
                Sub Region: {countryDetailInfo.subregion}
              </MoreInfoText>
              <MoreInfoText>Capital: {countryDetailInfo.capital}</MoreInfoText>
            </MoreInfo>
            <MoreInfo>
              <MoreInfoText>
                Top Level Domain: {countryDetailInfo.tld}
              </MoreInfoText>
              <MoreInfoText>Currencies: {currency[0][1].name}</MoreInfoText>
              <MoreInfoText>Langiages: {languages[0][1]}</MoreInfoText>
            </MoreInfo>
          </Wrapper>
          {countryDetailInfo.borders && (
            <Wrapper>
              Border Countries:
              {/* {borders.map((item) => {
                return <Button>{item}</Button>;
              })} */}
            </Wrapper>
          )}
        </MoreInfoBox>
      </DetailInfo>
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
  cursor: pointer;
`;
const DetailInfo = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Flag = styled.img`
  box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.0294384);
  border-radius: 10.0057px;
  max-width: 560px;
  width: 100%;
`;
const MoreInfoBox = styled.div`
  width: 50%;
  height: 400px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const CountryName = styled.h2`
  font-weight: 800;
  font-size: 32px;
  color: #111517;
`;
const MoreInfo = styled.div`
  width: 100%;
  height: 160px;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
`;
const MoreInfoText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #111517;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
`;
const Button = styled.button`
  width: 96px;
  height: 28px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  border: none;
`;
