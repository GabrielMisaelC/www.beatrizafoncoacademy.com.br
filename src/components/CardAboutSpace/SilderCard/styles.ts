import styled from 'styled-components';


export const Div = styled.div`
  background-color: white;
  position: relative;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;

  @media screen and (max-width:   900px) {
    height: 300px;
    width: 200px;
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 500px;
  height: 600px;
  border-radius: 2%;

  @media screen and (max-width:   900px) {
    height: 300px;
    width: 200px;
  }
`;

export const H1 = styled.h1`
  font-family: "EB Garamond";
  font-size: 36px;
  font-weight: 500;
  line-height: 43px;
  font-style: normal;
  letter-spacing: 0.05em;


  @media screen and (max-width:   900px) {
    font-size: 34px;
  }
`;

export const H2 = styled.h2`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @media screen and (max-width:   900px) {
    font-size: 14px;
  }
`;

export const Hr = styled.hr`
  width: 200px;
  border: 2px solid #DB7093;
`;




