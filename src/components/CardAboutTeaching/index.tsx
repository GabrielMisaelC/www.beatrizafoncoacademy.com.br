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
            O Espaço Beatriz Afonço possui três profissionais qualificadas em suas respectivas áreas, as quais estão sempre em treinamento para se especializar com as novas técnicas e conceitos para entregar o melhor procedimento para as clientes.
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