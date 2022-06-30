import { BiSearch } from "react-icons/bi";
import { Div, Input } from "./styles";



export function InputSearch() {
  return (
    <Div>
        <Input placeholder='Digite sua Busca' />
        <BiSearch size={30} color={'#808080	'} />
    </Div>
  );
}



