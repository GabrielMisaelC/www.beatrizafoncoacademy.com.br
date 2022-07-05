import { Container, Row, Column, Input, Nav } from './styles';
import { MobileNavigation } from './mobileNavigation';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Navigation } from './navigation';
import { InputSearch } from '../InputBusca';

export function Menu() {

  const isScrenn900px = useMediaQuery('(max-width: 900px)')
  const isScrennMin901px = useMediaQuery('(min-width: 901px')

  return (
    <Container>
      <Row>
        <Column>
            {isScrenn900px ? "" : <Navigation />}
        </Column>
        {/* <Column>
          {isScrennMin901px && <InputSearch />}
        </Column> */}
      </Row>
    </Container>
  )
}
