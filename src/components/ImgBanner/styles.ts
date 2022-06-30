import styled from "styled-components";

export const Img = styled.img`
  height: 400px;
  width: 1200px;

  @media screen and (max-width: 1024px) {
    height: auto;
    width: 768px;
  }

  @media screen and (max-width: 900px) {
    height: 400px;
    width: 300px;
  }
`;