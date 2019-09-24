import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, Content } from './styles';

export default function New() {
  return (
    <Container>
      <Content>
        <Form>
          <div>teste</div>
          <Input name="title" type="text" placeholder="Título do meetup" />
          <textarea name="description" type="text-area" placeholder="Descrição completa" />
          <Input name="date" type="text" placeholder="Data do meetup" />
          <Input name="address" type="text" placeholder="Localização" />
          <button type="submit" >Salvar meetup</button>
        </Form>
      </Content>
    </Container>
  );
}
