import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';
import { signInRequest } from '../../store/modules/auth/actions';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Informe seu e-mail'),
  password: Yup.string()
    .min(6, 'A senha deve conter 6 dígitos no mínimo')
})

export default function Login() {

  const dispatch = useDispatch();

  function handleSubmit({email, password}) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetup logo" />
      <Form onSubmit={handleSubmit} schema={schema} >
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />
        <button type="submit" >Acessar</button>
        <Link to="/signup" >Criar conta gratuita</Link>
      </Form>
    </>
  );
}
