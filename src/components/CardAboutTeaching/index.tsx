import { Container, H1, H2, Hr, Img, Post, HrEnd, P, Box, PostSlider } from "./styles";
import img01 from "../../images/ImagensCurso/img01.jpeg"
import img02 from "../../images/ImagensCurso/img02.jpeg"
import img03 from "../../images/ImagensCurso/img03.jpeg"
import useMediaQuery from '../../hooks/useMediaQuery';
import SilderCard from '../SilderCard/index';

export function CardAboutTeaching() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');

  return (
    <Box>
      <H1>{isScrenn900 ? "Cursos" : "Adquira Novos Conhecimentos"}</H1>
      <H2>NUNCA É TARDE PARA UM NOVO COMEÇO</H2>
      <Hr />
      <Container style={{gap: 20}}>
        <PostSlider>
          < SilderCard />
        </PostSlider>
        <Post>
          <H1>Qualidade De Ensino</H1>
          <H2>Saiba Mais</H2>
          <Hr />
          <P>
          O Espaço Beatriz Afonço possui três profissionais qualificadas em suas respectivas áreas, as quais estão sempre em treinamento para se especializar com as novas técnicas e conceitos para entregar o melhor procedimento para as clientes.
          </P>
        </Post>
      </Container>
      <HrEnd />
    </Box>
  );
}