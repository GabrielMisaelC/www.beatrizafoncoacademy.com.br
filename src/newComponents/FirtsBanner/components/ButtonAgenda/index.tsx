import { Span } from "./style";
import { TbCalendarStats } from 'react-icons/tb';
import useMediaQuery from "../../../../hooks/useMediaQuery";

export function ButtonAgenda() {

  const isScrenn900 = useMediaQuery('(max-width: 900px)');
  
  return (
    <Span>
      <a href="https://www.trinks.com/sao-paulo-sp/belenzinho?logradouro=Rua%20Herval%2C%20427&latitude=-23.5413903&longitude=-46.5911449&pesquisa=Beatriz%20Afon%C3%A7o%20Beauty%20#somenteComDesconto=false&precoInicial=&precoFinal=&dataPesquisa=12/01/2023&idCategoria=&facilidades=">

        {isScrenn900 ? <TbCalendarStats size={25} color={'#000'} /> : <TbCalendarStats size={30} color={'#000'} />}
        
      </a>
    </Span>
  )
}