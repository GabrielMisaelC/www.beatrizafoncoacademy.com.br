import styled from "styled-components";

export const Span = styled.span`
    background-color: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    color: #fff;
    border-radius: 60px;
    text-align: center;
    box-shadow: 0 0 20px 0 #555;
    z-index: 100;
    cursor: pointer;


    @media screen and (max-width:   900px) {
        width: 40px;
        height: 40px;
      }
`;