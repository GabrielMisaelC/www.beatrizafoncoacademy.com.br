import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:   900px) {
    flex-direction: column;
  }
`;


export const Post = styled.div`
  display: block;
  align-items: center;
  text-align: center;
  align-items: center;

`;

export const Iframe = styled.iframe`
  width: 600px;
  height: 500px;
  @media screen and (max-width:   900px) {
    width: 300px;
    height: 400px;
  }
`;


export const H1 = styled.h1`
  padding-top: 30px;
  font-family: "EB Garamond";
  font-size: 36px;
  font-weight: 500;
  line-height: 43px;
  font-style: normal;
  letter-spacing: 0.05em;
  color: #000;


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
  color: #000;

  @media screen and (max-width:   900px) {
    font-size: 14px;
  }
`;

export const Hr = styled.hr`
  width: 200px;
  border: 2px solid #4B0082;
`;

export const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width:   900px) {
  width: 50%;
}
`;