import { Span } from "./style";
import { TbBrandFacebook } from 'react-icons/tb';
import useMediaQuery from "../../../../hooks/useMediaQuery";

export function ButtonFacebook() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');
  
  
  return (
    <Span>
      <a href="https://www.facebook.com/beatrizafoncobeauty">
        {isScrenn900 ? <TbBrandFacebook size={25} color={'#000'} /> : <TbBrandFacebook size={30} color={'#000'} />}
      </a>
    </Span>
  )
}
