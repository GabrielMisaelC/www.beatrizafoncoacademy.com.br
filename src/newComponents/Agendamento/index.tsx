import {Container, H1, H2, Hr, HrEnd} from "./styles";
import {Button} from "./components/button";

export default function Agendamento(){
    return(
        <Container style={{ gap: 20 }}>
            <div style={{textAlign: 'center'}}>
                <H1>Agendamento Online</H1>
                <H2>ESPERAMOS POR VOCÊ!</H2>
                <Hr />
            </div>
            <Button text="Trinks" option="Trinks"/>
            <Button text="Whatsapp" option="Whatsapp"/>
            <HrEnd />
        </Container>
    )
}