import { Input } from "./styles";

type IInput = {
  type: string;
  placeholder?: string;
  autoFocus: boolean;
  width: string;
}
export function InputPers(props: IInput){
  return (
    <Input autoFocus={props.autoFocus} type={props.type} placeholder={props.placeholder} style={{ width: props.width}}></Input>
  );
}