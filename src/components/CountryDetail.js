import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CountryDetail(props) {
  let { countryName } = useParams();
  let navigate = useNavigate();
  let countryDetailInfo = props.data.find((country) => {
    return country.name.common == countryName;
  }); //აქ ვპოულობ რომელი ქარდის detail ღილაკზეც მოხდა კლიკი

  let nameArray =
    countryDetailInfo.name.nativeName &&
    Object.entries(countryDetailInfo.name.nativeName);
  let languages =
    countryDetailInfo.languages && Object.entries(countryDetailInfo.languages);
  let currency =
    countryDetailInfo.currencies &&
    Object.entries(countryDetailInfo.currencies);
  let borders = [];

  countryDetailInfo.borders &&
    props.data.forEach((item) => {
      countryDetailInfo.borders.forEach((bord) => {
        if (item.fifa == bord) {
          borders.push(item.name.common);
        }
      });
    });

  return (
    <DetailSection>
      <BackButton
        isClickedMode={props.isClickedMode}
        onClick={() => navigate("/")}
      >
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
      </BackButton>
      <DetailInfo>
        <Flag
          src={countryDetailInfo.flags.png}
          alt={countryDetailInfo.flags.alt}
        />
        <MoreInfoBox>
          <CountryName isClickedMode={props.isClickedMode}>
            {countryDetailInfo.name.common}
          </CountryName>
          <Wrapper>
            <MoreInfo isClickedMode={props.isClickedMode}>
              <MoreInfoText>
                <b>Native Name:</b>&nbsp;&nbsp;{" "}
                {nameArray && nameArray[0][1].common}
              </MoreInfoText>
              <MoreInfoText>
                <b>Population:</b>&nbsp;&nbsp; {countryDetailInfo.population}
              </MoreInfoText>
              <MoreInfoText>
                <b>Region:</b>&nbsp;&nbsp; {countryDetailInfo.region}
              </MoreInfoText>
              <MoreInfoText>
                <b>Sub Region:</b>&nbsp;&nbsp; {countryDetailInfo.subregion}
              </MoreInfoText>
              <MoreInfoText>
                <b>Capital:</b>&nbsp;&nbsp; {countryDetailInfo.capital}
              </MoreInfoText>
            </MoreInfo>
            <MoreInfo isClickedMode={props.isClickedMode}>
              <MoreInfoText>
                <b>Top Level Domain:</b> &nbsp;&nbsp;{countryDetailInfo.tld}
              </MoreInfoText>
              <MoreInfoText>
                <b>Currencies:</b>&nbsp;&nbsp; {currency && currency[0][1].name}
              </MoreInfoText>
              <MoreInfoText>
                <b>Langiages:</b>&nbsp;&nbsp; {languages && languages[0][1]}
              </MoreInfoText>
            </MoreInfo>
          </Wrapper>
          {countryDetailInfo.borders && (
            <Wrapper
              isClickedMode={props.isClickedMode}
              style={{ justifyContent: "flex-start" }}
            >
              Border Countries:
              {borders.map((item) => {
                return (
                  <Button
                    onClick={() => navigate(`/${item}`)}
                    isClickedMode={props.isClickedMode}
                  >
                    {item}
                  </Button>
                );
              })}
            </Wrapper>
          )}
        </MoreInfoBox>
      </DetailInfo>
    </DetailSection>
  );
}

const DetailSection = styled.section`
  width: 90%;
  height: 80vh;
  margin: 90px auto;
`;
const BackButton = styled.button`
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
  height: 100%;
`;
const MoreInfoBox = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const CountryName = styled.h2`
  font-weight: 800;
  font-size: 32px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
`;
const MoreInfo = styled.div`
  width: 40%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
`;
const MoreInfoText = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
`;
const Button = styled.button`
  width: 96px;
  height: 28px;
  background-color: ${(props) => (props.isClickedMode ? "#2B3844" : "#fff")};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  border: none;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
  cursor: pointer;
`;
