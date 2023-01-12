
import styled from 'styled-components';


export const Conteiner = styled.div`
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

export const Img = styled.img`
border-radius: 2%;
margin:0 auto;
padding-top: 40px;
opacity : 0.6;
`;

export const Titulo = styled.h2`
font-family: "Roboto";
color: white;
font-size: 12px;
font-weight: 100;
line-height: 20px;
letter-spacing: 0.30em;
text-transform: uppercase;
bottom: 0;
left: 0;
right: 0;
top: 0;
`;





