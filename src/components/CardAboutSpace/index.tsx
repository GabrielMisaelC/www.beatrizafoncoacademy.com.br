import { Container, H1, H2, Hr, Img, Post, P, HrEnd, Box, PostSlider } from "./styles";
import useMediaQuery from '../../hooks/useMediaQuery';
import SilderCardSpace from "./SilderCard";

export function CardAboutSpace() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');

  return (
    <Box>
      <H1>{isScrenn900 ? "Espaço" : "Espaço Preparado"}</H1>
      <H2></H2>
      <Hr />
      <Container style={{gap: 20}}>
        <PostSlider>
          < SilderCardSpace />
        </PostSlider>
        <Post>
          <H1>{isScrenn900 ? "Espaço Preparado" : "Espaço Preparado Para melhor Atender Nossos Clientes"}</H1>
          <H2>Saiba Mais</H2>
          <Hr />
          <P>
          Um espaço coberto de amor e carinho para te oferecer, um método acadêmico formado de sonhos e um instituto restaurador de autoestima. Eu e minha equipe trabalhamos diariamente e constantemente para transformar vidas, oferecendo que cada pessoa conquiste seu protagonismo, independência e sucesso. Seja bem-vinda à nossa história! Entra, sinta o nosso aroma e se saboreie com nosso cappuccino!
         </P>
        </Post>
      </Container>
      <HrEnd />
    </Box>
  );
}