import { Titulo } from "../Titulo";

export function NavLinks(props: any) {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='/#home' text='Home' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#teaching' text='Cursos' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#services' text='Serviços' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#aboutServices' text='Sobre Serviços' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#team' text='Equipe' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#equipment' text='Equipamentos' />
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Titulo href='#maps' text='Localizar' />
      </li>
    </ul>
  );
}