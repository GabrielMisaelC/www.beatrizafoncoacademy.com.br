import { ButtonCss } from "./styles";


type IButton = {  
  text?: string;
  width: string;
}

export function Button(props: IButton){
  
  return(
    <ButtonCss style={{width: props.width}}>{props.text}</ButtonCss>
  )
}
