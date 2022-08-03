import { Box, Container, H1, H2, Hr, HrEnd, Img, P, Post, PostSlider } from "./styles";
import useMediaQuery from '../../hooks/useMediaQuery';
import SilderCard from "./SliderCard";


export function CardAboutServices() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');

  return (
    <Box>
      <H1>{isScrenn900 ? "Procedimentos" : "Procedimentos Preparados Para Você"}</H1>
      <H2></H2>
      <Hr />
      <Container style={{ gap: 20 }}>
        {isScrenn900 && <PostSlider>
          < SilderCard />
        </PostSlider>}
        <Post>
          <H1>Tudo Sobre Nossos Procedimentos</H1>
          <H2>Saiba Mais</H2>
          <Hr />
          <P>
          Defendemos que a revolução da beleza é natural. Em todos os procedimentos do nosso espaço aplicamos a naturalidade, e claro respeitando sempre o crescimento fisiológico. O método Beatriz Afonço Beauty ressalta a beleza que é somente sua.
          </P>
        </Post>
        {isScrenn900 ? "" : <PostSlider>
          < SilderCard />
        </PostSlider>}
      </Container>
      <HrEnd />
    </Box>
  );
}
