import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Meetup} from './styles';
import api from '../../services/api';

export default function Details({ match }) {

  const [id, setId] = useState(null);
  const [meetup, setMeetup] = useState({});

  async function loadMeetup() {
    const response = await api.get(`meetups/${id}`);
    setMeetup(response.data);
  }

  useEffect(() => {
    const { params } = match;
    if(params.id) {
      setId(params.id);
    }
  }, [match]);

  useEffect(() => {
    loadMeetup();
  }, [id]);

  return (
    <Container >
      <Content >

        <nav>
          <h2>{meetup.title}</h2>
          <aside>
            <Link to={`/edit/${id}`} >Editar</Link>
            <Link to="/dashboard" >Cancelar</Link>

          </aside>
        </nav>

        <Meetup>
          { meetup && meetup.image && meetup.image.url && <img src={meetup.image.url} />}

          <p>{meetup.description}</p>
        </Meetup>

      </Content>
    </Container>
  );
}
