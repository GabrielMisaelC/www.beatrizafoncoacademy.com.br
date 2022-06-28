
import { BaseBoard } from "../../components/BaseBoard";
import { Button } from "../../components/Button";
import { InputPers } from "../../components/Input";
import { Container, Body, Column, Row } from './styles';
import { BsFacebook } from 'react-icons/bs';
import { SiGoogle } from 'react-icons/si';

export function Login() {
  return (
    <Body>
      <Container>
        <h1 style={{ fontFamily: 'Fascinate' }}>Login</h1>
        <InputPers width="100%" autoFocus={true} type='text' placeholder='E-mail'></InputPers>
        <br />
        <InputPers width="100%" autoFocus={false} type='password' placeholder='Password'></InputPers>
        <br />
        <br />
        <Button width="80%" text='Acess' ></Button>
        <br />
        <br />
        <Column>
          <Row style={{
            gap: 50,
            justifyContent: 'center',
            fontSize: '20px',
          }}>
             <BsFacebook size={30} color={'#191970'}/>
             or
             <SiGoogle size={30} color={'#191970'}/>
          </Row>
        </Column>
        <br />
        <br />
        <Button width="80%" text='Create my Accont'></Button>
      </Container>
      {/* <BaseBoard /> */}
    </Body>
  );
}