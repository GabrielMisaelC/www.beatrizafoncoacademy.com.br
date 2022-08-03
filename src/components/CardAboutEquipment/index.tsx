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
          Trabalhamos com equipamento de alta tecnologia, e cada cliente possui seus instrumentos individuais para o serviço realizado.
         </P>
        </Post>
      </Container>
      <HrEnd />
    </Box>
  );
}