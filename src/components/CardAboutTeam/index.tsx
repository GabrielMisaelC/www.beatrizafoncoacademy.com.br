import { Box, Container, H1, H2, Hr, HrEnd, Img, P, Post, PostSlider } from "./styles";
import img03 from "../../images/ImagensCurso/img03.jpeg"
import useMediaQuery from '../../hooks/useMediaQuery';
import SilderCardTeam from './SliderCardTeam/index';

export function CardAboutTeam() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');

  return (
    <Box>
      <H1>{isScrenn900 ? "Equipe" : "Equipe Altamente Qualificada"}</H1>
      <H2></H2>
      <Hr />
      <Container style={{ gap: 20 }}>
        {isScrenn900 && <PostSlider>
          < SilderCardTeam />
        </PostSlider>}
        <Post>
          <H1>Sobre Nossa Equipe</H1>
          <H2>Saiba Mais</H2>
          <Hr />
          <P>
          Nossa equipe está sempre em treinamento buscando conhecimento para entregar um excelente serviço e atendimento.
          </P>
        </Post>
        {isScrenn900 ? "" : <PostSlider>
          < SilderCardTeam />
        </PostSlider>}
      </Container>
      <HrEnd />
    </Box>
  );
}
