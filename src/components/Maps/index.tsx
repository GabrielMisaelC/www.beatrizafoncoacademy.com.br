import { Container, H1, H2, Hr, Post, Iframe, Div } from "./styles";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Button } from "./components/button";

export function Maps() {


  const isScrenn900 = useMediaQuery('(max-width: 900px)');

  return (
    <div style={{ textAlign: "center" }}>
      <H1>Venha nos Visitar</H1>
      <H2>{isScrenn900 ? "Planeje já sua Rota" : "Planeje já sua Rota Para uma nova Experiencia"}</H2>
      <Hr />
      <Container style={{ gap: 20 }}>
        <Post>
          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7340450897236!2d-46.59559638440297!3d-23.542066166766574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce592d348d4ef5%3A0xa6729c9f91aec03e!2sR.%20Silva%20Jardim%2C%2097%20-%20Belenzinho%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003057-070!5e0!3m2!1spt-BR!2sbr!4v1659379706622!5m2!1spt-BR!2sbr" style={{ border: 0 }} loading="lazy" ></Iframe>
        </Post>
        <Div style={{ gap: 20 }}>
          <div>
            <Button text="Venha de Uber!"/>
          </div>
          <div>
            <Button text="Venha com Waze!"/>
          </div>
          <div>
            <Button text="Venha com Maps!"/>
          </div>
        </Div>
      </Container>
      <hr style={{ width: '80%', border: "2px solid #4B0082" }} />
    </div>
  );
}