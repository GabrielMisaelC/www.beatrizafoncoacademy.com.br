import { Img } from "./styles";
import banner01 from '../../images/banner01.jpeg';
import banner_300_400 from '../../images/banner_300_400.jpeg'
import useMediaQuery from '../../hooks/useMediaQuery';

export function Imagem(){

  const isScreen900 = useMediaQuery('(min-width: 900px)')

  return (
    <div>
      {isScreen900 ? <Img src={banner01} />  : <Img src={banner_300_400} /> }
    </div>
  );
}