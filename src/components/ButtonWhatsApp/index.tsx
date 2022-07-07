import { Span } from "./style";
import { BsWhatsapp } from 'react-icons/bs';

export function ButtonWhatsApp() {
  return (
    <Span>
      <a href="https://api.whatsapp.com/send?phone=5511984506890&text=Olá,%20Gostaria%20de%20Mais%20Informações">
        <BsWhatsapp size={30} color={'#DCDCDC'} />
      </a>
    </Span>
  )
}