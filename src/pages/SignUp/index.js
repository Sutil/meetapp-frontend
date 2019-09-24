import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Informe seu nome.'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Informe seu e-mail'),
  password: Yup.string()
    .min(6, 'A senha deve conter 6 dígitos no mínimo'),
})

export default function SignUp() {

  const dispatch = useDispatch();

  function handleSubmit({name, email, password}) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetup logo" />
      <Form schema={schema} onSubmit={handleSubmit} >
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />
        <button type="submit" >Criar conta</button>
        <Link to="/" >Já tenho login</Link>
      </Form>
    </>
  );
}
