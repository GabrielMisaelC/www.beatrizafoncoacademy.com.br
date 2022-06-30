import { Container, H1, H2, Hr, Img, Post } from "./styles";
import img01 from "../../images/ImagensCurso/img01.jpeg"
import img02 from "../../images/ImagensCurso/img02.jpeg"


export function BannerCurso() {
  return (
    <div style={{ textAlign: "center" }}>
      <H1>Adquira Novos Conhecimentos</H1>
      <H2>CONHECIMENTO NUNCA É DEMAIS, ESCOLHA O SEU</H2>
      <Hr />
      <Container style={{ gap: 100 }}>
        <Post>
          <Img src={img01} />
        </Post>
        <Post>
          <Img src={img02} />
        </Post>
      </Container>
      <hr style={{ width: '80%', border: "2px solid #4B0082" }} />
    </div>
  );
}