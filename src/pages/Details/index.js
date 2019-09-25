import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEvent, MdPlace } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Content, Meetup} from './styles';
import api from '../../services/api';

export default function Details({ match }) {

  const [id, setId] = useState(null);
  const [meetup, setMeetup] = useState({});



  useEffect(() => {
    const { params } = match;
    if(params.id) {
      setId(params.id);
    }
  }, [match]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);

      const m = {
        ...response.data,
        formattedDate: format(parseISO(response.data.date), "dd 'de' MMMM 'às' HH:mm'h'", {locale: pt})
      }

      setMeetup(m);
    }
    if(id) {
      loadMeetup();
    }
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
          { meetup && meetup.image && meetup.image.url && <img src={meetup.image.url} alt="Meetup" />}

          <p>{meetup.description}</p>

          <div>
            <time> <MdEvent /> {meetup.formattedDate}</time>
            <span> <MdPlace /> {meetup.location}</span>
          </div>
        </Meetup>

      </Content>
    </Container>
  );
}
