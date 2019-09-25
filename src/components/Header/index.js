import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Content, Profile } from './styles';
import logo from '../../assets/logo.svg';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container >
      <Content>
        <Link to="/" >
          <img src={logo} alt="Meetup logo" />
        </Link>
        <aside>
          <Profile>
            <strong>Eduardo Sutil</strong>
            <Link to="/profile" >Meu perfil</Link>
          </Profile>
          <button type="button" onClick={handleSignOut} >SAIR</button>
        </aside>
      </Content>

    </Container>
  );
}
