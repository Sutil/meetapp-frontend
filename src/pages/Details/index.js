import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content} from './styles';

export default function Details() {
  return (
    <Container >
      <Content >

        <nav>
          <h2>Meetup de data science</h2>
          <aside>
            <Link>Editar</Link>
            <Link>Cancelar</Link>

          </aside>
        </nav>

      </Content>
    </Container>
  );
}
