import { Span } from "./style";
import { BsInstagram } from 'react-icons/bs';
import useMediaQuery from "../../../../hooks/useMediaQuery";

export function ButtonInstagram() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');
  

  return (
    <Span>
      <a href="https://api.whatsapp.com/send?phone=5511959725770&text=Olá,%20Gostaria%20de%20Mais%20Informações">
        {isScrenn900 ?  <BsInstagram size={25} color={'#000'} /> :  <BsInstagram size={30} color={'#000'} />}
      </a>
    </Span>
  )
}