import { Container, Row, Column, Input } from './styles';
import { Titulo } from '../Titulo';
import { BiSearch } from 'react-icons/bi'


export function Menu() {
  return (
    <Container>
      <Row style={{
        gap: 100,
        justifyContent: 'center',
      }}>
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
        <Column>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "#DCDCDC", justifyItems: "center", flex: "2" , width: "270px"}}>
            <Row style={{
              gap: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Input placeholder='Digite sua Busca' />
              <BiSearch size={30} color={'#808080	'} />
            </Row>
          </div>
        </Column>
      </Row>
    </Container>
  )
}
