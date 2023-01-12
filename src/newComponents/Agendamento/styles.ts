
import styled from 'styled-components';

export const Container = styled.div`
width: 1200px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50px
`;

export const H1 = styled.h1`
  padding-top: 30px;
  font-family: "roboto";
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;
  font-style: normal;
  letter-spacing: 0.09em;


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
    font-size: 12px;
  }
`;

export const Hr = styled.hr`
  width: 200px;
  border: 2px solid #DB7093;
`;

export const HrEnd = styled.hr`
width: 80%;
border: 2px solid #DB7093;
`;



