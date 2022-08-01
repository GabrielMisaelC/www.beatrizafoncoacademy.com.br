import styled from "styled-components";


export const Box = styled.div`
text-align: center;
@media screen and (max-width:   900px) {
    height: 80%;
  }
`;

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
export const Button = styled.button`
  background-color: #4B0082;   
  border: 0;
  font-family: Staatliches;
  font-size: 20px;
  border-radius: 50px;
  padding: 6px 12px;
  width: 60%;
  height: 40px;
  color: #FFF;

  &:hover {
    background-color: #191970;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border: 3px solid #ccc;
  font-size: 18px;
  font-family: Staatliches;
  border-radius: 50px;
  text-align: center;
  @media screen and (max-width:   900px) {
    width: 200px;
  }
  `;

export const PostSlider = styled.div`
  width: 500px;
  height: 600px;

  @media screen and (max-width:   900px) {
    height: 300px;
    width: 200px;
  }
`;

export const Post = styled.div`
  height: 90%;
  width: 40%;
  display: block;
  align-items: center;
  text-align: center;
  align-items: center;

  @media screen and (max-width:   900px) {
    height: 400px;
    width: 300px;
  }
`;


export const Img = styled.img`
  width: 500px;
  height: 600px;
  /* padding-top: 10px; */
  border-radius: 10%;

  @media screen and (max-width:   900px) {
    height: 300px;
    width: 200px;
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

export const HrEnd = styled.hr`
width: 80%;
border: 2px solid #4B0082;
`;

export const P = styled.p`
font-size: 30px;
font-family: 'EB Garamond';

@media screen and (max-width:   900px) {
    font-size: 14px;
  }
`;