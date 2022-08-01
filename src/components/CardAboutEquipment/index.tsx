import { Container, H1, H2, Hr, Img, Post, P, HrEnd, Box, PostSlider } from "./styles";
import useMediaQuery from '../../hooks/useMediaQuery';
import SilderCardEquipament from "./SliderCardEquipament";



export function CardAboutEquipment() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');

  return (
    <Box>
      <H1>{isScrenn900 ? "Equipamentos" : "Equipamentos Modernos"}</H1>
      <H2></H2>
      <Hr />
      <Container style={{gap: 20}}>
        <PostSlider>
          < SilderCardEquipament />
        </PostSlider>
        <Post>
          <H1>{isScrenn900 ? "Equipamentos Modernos" : "Melhores Equipamentos Para Atender"}</H1>
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