import { Container, H1, H2, Hr, Img, Post } from "./styles";
import img03 from "../../images/ImagensCurso/img03.jpeg"
import useMediaQuery from '../../hooks/useMediaQuery';

export function CardAboutTeam() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');

  return (
    <div style={{ textAlign: "center" }}>
      <H1>Equipe Altamente Qualificada</H1>
      <H2></H2>
      <Hr />
      <Container style={{ gap: 20 }}>
        <Post>
          <H1>Sobre Nossa Equipe</H1>
          <H2>Saiba Mais</H2>
          <Hr />
          <p style={{fontSize: '30px', fontFamily: "EB Garamond"}}>
          O Espaço Beatriz Afonço possui três profissionais qualificadas em suas respectivas áreas, as quais estão sempre em treinamento para se especializar com as novas técnicas e conceitos para entregar o melhor procedimento para as clientes.
          </p>
          {/* <Img src={img02} /> */}
        </Post>
        <Post>
          <Img src={img03} />
        </Post>
      </Container>
      <hr style={{ width: '80%', border: "2px solid #4B0082" }} />
    </div>
  );
}