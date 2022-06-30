import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


export const Post = styled.div`
  height: 90%;
  width: 40%;
  display: block;
  align-items: center;
  text-align: center;
  align-items: center;
`;


export const Img = styled.img`
  width: 500px;
  /* padding-top: 10px; */
  border-radius: 10%;
`;

export const H1 = styled.h1`
  padding-top: 30px;
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
  border: 2px solid #4B0082;
`;

export const Div = styled.div`
  background-color: white;
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`;