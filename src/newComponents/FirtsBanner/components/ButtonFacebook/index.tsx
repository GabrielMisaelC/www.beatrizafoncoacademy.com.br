import { Span } from "./style";
import { TbBrandFacebook } from 'react-icons/tb';
import useMediaQuery from "../../../../hooks/useMediaQuery";

export function ButtonFacebook() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');
  
  
  return (
    <Span>
      <a href="https://api.whatsapp.com/send?phone=5511959725770&text=Olá,%20Gostaria%20de%20Mais%20Informações">
        {isScrenn900 ? <TbBrandFacebook size={25} color={'#000'} /> : <TbBrandFacebook size={30} color={'#000'} />}
      </a>
    </Span>
  )
}
