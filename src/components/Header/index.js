import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container >
      <Content>
        <Link to="/" >
          <img src={logo} />
        </Link>
        <aside>
          <Profile>
            <strong>Eduardo Sutil</strong>
            <Link to="/profile" >Meu perfil</Link>
          </Profile>
          <button type="button">SAIR</button>
        </aside>
      </Content>

    </Container>
  );
}
