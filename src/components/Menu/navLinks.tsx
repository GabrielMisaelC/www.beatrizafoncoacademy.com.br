import { Titulo } from "../Titulo";

export function NavLinks(props: any) {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='/#home' text='Home' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='/#produtos' text='Produtos' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='/#servicos' text='Serviços' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='/#fotos' text='Fotos' />
      </li>
    </ul>
  );
}
