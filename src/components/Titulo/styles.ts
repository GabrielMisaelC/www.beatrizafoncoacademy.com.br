import styled from 'styled-components';
export const A = styled.a`
  white-space: nowrap;
  font-size: 16px;
  font-family: EB Garamond;
  color: #000;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  text-decoration:none;
  &:hover {
    text-decoration: underline #000;
    left: 0px;
    top: 10px;
    text-decoration-color: #4B0082; 
    text-decoration-thickness: 40%;
    white-space: pre;
  }
`;