import { Container, H1, H2, Hr, Img, Post, HrEnd, P, Box, PostSlider, Button, Input } from "./styles";
import img01 from "../../images/ImagensCurso/img01.jpeg"
import img02 from "../../images/ImagensCurso/img02.jpeg"
import img03 from "../../images/ImagensCurso/img03.jpeg"
import useMediaQuery from '../../hooks/useMediaQuery';
import SilderCardSpaceTeaching from './SliderCardTeaching/index';
import { useState } from 'react';



export function CardAboutTeaching() {

  const [isform, setIsForm] = useState(false);

  const isScrenn900 = useMediaQuery('(max-width: 900px)');

  return (
    <Box>
      <H1>{isScrenn900 ? "Cursos" : "Adquira Novos Conhecimentos"}</H1>
      <H2>NUNCA É TARDE PARA UM NOVO COMEÇO</H2>
      <Hr />
      {!isform && <Container style={{ gap: 20 }}>
        <PostSlider>
          < SilderCardSpaceTeaching />
        </PostSlider>
        <Post>
          <H1>Qualidade De Ensino</H1>
          <H2>Saiba Mais</H2>
          <Hr />
          <P>
          Método de ensino Beatriz Afonço Academy - Em nossa metodologia de ensino fazemos você entender e respeitar o seu processo de crescimento para desenvolver as habilidades das técnicas, mostrando o caminho certo para você seguir e ser uma profissional de sucesso. Entendemos que as técnicas são apenas ferramentas para vocês espalharem o carinho, pois é mais que uma profissão, renovamos vidas por trás da aparência. Conheça nossos cursos abaixo:
          </P>
        </Post>
      </Container>}
      {isform && <div>
        <Input placeholder="Nome" type='text' ></Input>
        <br />
        <br />
        <Input placeholder="E-mail" type='email'></Input>
        <br />
        <br />
        <Input placeholder="Celular" type='tel' ></Input>
        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Button onClick={() => setIsForm(false)}>Enviar</Button>
      </div>
      </div>}
      {!isform &&     <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Button onClick={() => setIsForm(true)}>Quero me Inscrever!</Button>
      </div>}
      <HrEnd />
    </Box>
  );
}