import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButton from "./BackButton";

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
      <BackButton isClickedMode={props.isClickedMode} />
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
            <BorderWrapper isClickedMode={props.isClickedMode}>
              <p>Border Countries:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
              </div>
            </BorderWrapper>
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
  @media (max-width: 375px) {
    height: auto;
  }
`;

const DetailInfo = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
const Flag = styled.img`
  box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.0294384);
  border-radius: 10.0057px;
  max-width: 560px;
  width: 100%;
  height: 100%;
  @media (max-width: 375px) {
    margin-bottom: 40px;
  }
`;
const MoreInfoBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
const CountryName = styled.h2`
  font-weight: 800;
  font-size: 32px;
  margin-bottom: 20px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
  @media (max-width: 375px) {
    font-size: 22px;
  }
`;
const MoreInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
  @media (max-width: 375px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
const MoreInfoText = styled.p`
  font-weight: 600;
  font-size: 16px;
  @media (max-width: 375px) {
    font-size: 14px;
  }
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
  margin-bottom: 20px;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
const BorderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.isClickedMode ? "#fff" : "#111517")};
  margin-bottom: 20px;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: start;
  }
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
  font-size: 14px;
  @media (max-width: 375px) {
    font-size: 12px;
    letter-spacing: 0.5px;
  }
`;
