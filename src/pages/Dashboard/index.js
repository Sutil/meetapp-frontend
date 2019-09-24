import React from 'react'
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <nav>
          <h2>Meus meetups</h2>
          <Link>Novo meetup</Link>
        </nav>
        <ul>
          <li>
            <strong>Data science meetup</strong>
            <time>25 de abril, às 14h</time>
          </li>

          <li>
            <strong>Data science meetup</strong>
            <time>25 de abril, às 14h</time>
          </li>

          <li>
            <strong>Data science meetup</strong>
            <time>25 de abril, às 14h</time>
          </li>

          <li>
            <strong>Data science meetup</strong>
            <time>25 de abril, às 14h</time>
          </li>
        </ul>
      </Content>
    </Container>
  )
}
