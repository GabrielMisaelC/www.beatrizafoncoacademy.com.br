import { Container, Row, Column } from './styles';
import { BsCart, BsPersonCircle, BsHandbag, BsPerson } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Titulo } from '../Titulo';


// import Logo from './logo_Beatriz_Afonco.jpg';

export function Menu() {
  return (
    <Container>
      <Row>
        <Column>
          <Link to='/perfil'>
            <BsPerson size={30} color={'#000000	'} /> </Link>
        </Column>
        {/* <Column>
          <div className='logo-content'>
            <img src={Logo} />
          </div>
        </Column> */}


        <Column>
          <Row style={{
            gap: 100,
            justifyContent: 'center',
          }}>
              <Titulo href='/teste' text='Produtos' />
              <Titulo href='/teste' text='Serviços' />
              <Titulo href='/teste' text='Fotos' />
          </Row>
        </Column>
{/* 
        <Column>
          <Titulo href='/teste' text='Produtos' />
        </Column>
        <Column>
          <Titulo href='/teste' text='Serviços' />
        </Column>

        <Column>
          <Titulo href='/teste' text='Fotos' />
        </Column> */}

        <Column>
          <Row style={{
            gap: 50,
            justifyContent: 'center',
          }}>
            <MdOutlineLocationOn size={30} color={'#000000	'} />
            <BsHandbag size={30} color={'#000000	'} />
          </Row>
        </Column>
      </Row>
    </Container>
  )
}
