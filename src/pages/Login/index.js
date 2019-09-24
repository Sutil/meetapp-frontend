import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';

export default function Login() {

  function handleSubmit() {

  }

  return (
    <>
      <img src={logo} />
      <Form onSubmit={handleSubmit} >
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />
        <button type="submit" >Acessar</button>
        <Link to="/signup" >Criar conta gratuita</Link>
      </Form>
    </>
  );
}
