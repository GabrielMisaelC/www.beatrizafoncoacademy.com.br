import { Link, Navigate } from "react-router-dom";
import { ButtonCss } from "./styles";


type IButton = {  
  text?: string;
  option: string;
}

export function Button(props: IButton){
  
  function onClick(){
    if(props.option == 'Whatsapp'){
      console.log("Whatsapp")
      window.location.href = 'https://api.whatsapp.com/send?phone=5511959725770&text=Olá,%20Gostaria%20de%20Mais%20Informações'
    }else{
      console.log("Trinks")
      window.location.href = 'https://www.trinks.com/sao-paulo-sp/belenzinho?logradouro=Rua%20Herval%2C%20427&latitude=-23.5413903&longitude=-46.5911449&pesquisa=Beatriz%20Afon%C3%A7o%20Beauty%20#somenteComDesconto=false&precoInicial=&precoFinal=&dataPesquisa=12/01/2023&idCategoria=&facilidades='
    }
  }

  return(
    <ButtonCss onClick={onClick}>{props.text}</ButtonCss>
  )
}
