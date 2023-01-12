import { Link, Navigate } from "react-router-dom";
import { ButtonCss } from "./styles";


type IButton = {  
  text?: string;
}

export function Button(props: IButton){
  
  function onClick(){
    console.log("Button")
  }

  return(
    <ButtonCss onClick={onClick}>{props.text}</ButtonCss>
  )
}
