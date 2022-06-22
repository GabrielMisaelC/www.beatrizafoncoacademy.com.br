import styled from "styled-components";

export const Container = styled.form`
background-color: #FFF;
border-radius: 6px;
width: 300px;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> h1{
  text-align: center;
  margin-top: -20px;
}
`;

export const Body = styled.div`
background-color: white;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
