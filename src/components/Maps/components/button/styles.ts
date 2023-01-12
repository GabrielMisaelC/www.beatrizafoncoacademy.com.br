import styled from 'styled-components';

export const ButtonCss = styled.button`
  border-color: #000;  
  border: 1;
  font-family: Staatliches;
  font-size: 20px;
  padding: 6px 12px;
  width: 250px; 
  height: 60px;
  color: #000;

  &:hover {
    background-color: #4B0082;
    color: #FFF;
  }

  @media screen and (max-width:   900px) {
    width: 150px;
  }
`;