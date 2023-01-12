
import styled, { keyframes } from 'styled-components';



export const DivButton = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;



export const Meio = styled.div`
width: 100%;
display: flex;
flex: 2;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const Conteiner = styled.div`
padding-bottom: 200px;
// margin: 5% 5% 5% 5%;
text-align: center;
// display: flex;
flex-direction: column;
align-items: center;
`;

export const Div = styled.div`
width: 500px;
height: 600px;
position: relative;
border-radius: 5%;

@media screen and (min-height:   830px) {
    height: 730px;
}
@media screen and (min-height:   860px) {
    height: 760px;
}
@media screen and (min-height:   900px) {
    height: 800px;
}
@media screen and (min-height:   913px) {
    height: 820px;
}
@media screen and (min-height:   1180px) {
    height: 1080px;
}
@media screen and (min-height:   1300px) {
    height: 1200px;
}
`;

export const PostSlider = styled.div`
  width: 500px;
  height: 600px;

  @media screen and (max-width:   900px) {
    width: 300px;
    height: 500px;
  }
`;

export const Img = styled.img`
border-radius: 2%;
margin:0 auto;
padding-top: 40px;
opacity : 0.7;

@media screen and (max-width:   900px) {
    width: 300px;
    height: 500px;
  }
`;

export const Titulo = styled.h2`
padding-top: 5px;
padding-bottom: 5px;
font-family: "Roboto";
color: #000;
font-size: 18px;
font-weight: 100;
line-height: 20px;
letter-spacing: 0.30em;
text-transform: uppercase;
bottom: 0;
left: 0;
right: 0;
top: 0;
animation-name: example;
animation-duration: 10s;
animation-delay: -1s;


@keyframes example {
    from { width: 0 }
    to { width: 100% }
}
`;




