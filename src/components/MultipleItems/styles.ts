import styled from 'styled-components';

export const Img = styled.img`
  height: 200px;
  width: 275px;
  border-radius: 10%;
  border: 2px solid #dfdfdf;
  &:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
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


