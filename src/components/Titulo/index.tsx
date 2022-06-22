import { A } from "./styles"

type ITitulo = {
  text: string;
  href: string;
}
export function Titulo(props: ITitulo){
  return(
    <div>
      <A href={props.href}>{props.text}</A>
    </div>
  )
}