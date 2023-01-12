import {Container} from "./styles";
import {Button} from "./components/button";

export default function Agendamento(){
    return(
        <Container style={{ gap: 20 }}>
            <Button text="Trinks"/>
            <Button text="Whatsapp"/>
        </Container>
    )
}