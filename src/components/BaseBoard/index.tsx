import { Box, Container, Column} from "./styles";
import { BsFacebook, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

export function BaseBoard() {
  return(
    <Box>
    <Container>
        <Column>
            <BsFacebook size={30} color={'#DCDCDC'}/>
        </Column>     
        <Column> 
            <FaInstagram size={30} color={'#DCDCDC'}/>
        </Column>    
        <Column>   
            <SiGoogle size={30} color={'#DCDCDC'}/>
        </Column>     
        <Column> 
            <BsWhatsapp size={30} color={'#DCDCDC'}/>
        </Column>  
    </Container>
  </Box>
  );
}