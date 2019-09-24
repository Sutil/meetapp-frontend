import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} />
      <Form>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />
        <button type="submit" >Criar conta</button>
        <Link to="/" >Já tenho login</Link>
      </Form>
    </>
  );
}
