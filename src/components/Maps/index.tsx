import { Container, H1, H2, Hr, Img, Post } from "./styles";
import img01 from "../../images/ImagensCurso/img01.jpeg"
import img02 from "../../images/ImagensCurso/img02.jpeg"

export function Maps() {
  return (
    <div style={{ textAlign: "center" }}>
      <H1>Venha nos Visitar</H1>
      <H2>Planeje já sua Rota Para uma nova Experiencia</H2>
      <Hr />
      <Container style={{ gap: 100 }}>
        <Post>
          {/* <Img src={img01} /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.652097997062!2d-46.90744798441733!3d-22.74116893770099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8de94f9188f55%3A0x98484eb03f0f6469!2sRS%20Solutions!5e0!3m2!1spt-BR!2sbr!4v1656555954529!5m2!1spt-BR!2sbr" width="600" height="500" style={{border:0}} loading="lazy" ></iframe>
        </Post>
        <Post>
        <nav>
          <ul>
            <li>
              Whatsapp
            </li>
            <li>
              Telefone
            </li>
            <li>
              Email
            </li>
            <li>
              Instagram
            </li>
          </ul>
        </nav>
       </Post>
      </Container>
      <hr style={{ width: '80%', border: "2px solid #4B0082" }} />
    </div>
  );
}