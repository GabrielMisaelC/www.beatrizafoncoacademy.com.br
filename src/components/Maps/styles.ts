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
    height: 500px;
}
`;


export const Post = styled.div`
  height: 90%;
  width: 80%;
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


  @media screen and (max-width:   900px) {
    font-size: 34px;
  }
`;

export const SubH1 = styled.h1`
  padding-top: 10px;
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

export const Nav = styled.nav`
  >ul{
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: 'center';
    list-style: none;
  }

  >li{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40%;
      }

  @media screen and (max-width:   900px) {
    align-items: center;
    >ul{
      position: absolute;
      left: 0;
      top: 80px;
      width: 90%;
      background: #DCDC;
      border-top: 2px solid #191970;
      z-index: 5;
      >li{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40%;
      }
    }
    .Hamburger{
      position: absolute;
      left: 5%;
      cursor: pointer;
    }
  }
`;

export const A = styled.a`
  font-size: 28px;
  font-family: EB Garamond;
  color: #000;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  text-decoration:none;
`;

