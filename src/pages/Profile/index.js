import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content } from './styles';
import {updateProfileRequest} from '../../store/modules/user/actions';
export default function Profile() {

  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container >
      <Content>
        <Form initialData={profile} onSubmit={handleSubmit} >
          <Input name="name" placeholder="Nome completo" />
          <Input name="email" placeholder="Seu e-amil" />

          <hr />

          <Input name="oldPassword" placeholder="Senha atual" />
          <Input name="password" placeholder="Nova senha" />
          <Input name="confirmPassword" placeholder="Confirme sua senha" />
          <button>Salvar perfil</button>
        </Form>
      </Content>
    </Container>
  );
}
