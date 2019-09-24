import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Content } from './styles';
import api from '../../services/api';

export default function Dashboard() {

  const [meetups, setMeetups] = useState([]);



  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const { data } = response;
      const list  = data.map(m => {
        return {
          ...m,
          formattedDate: format(parseISO(m.date),"dd 'de' MMMM, 'às' HH:mm'h'", {locale: pt} )
        }
      })

      setMeetups(list);
    }

    loadMeetups()
  }, []);


  return (
    <Container>
      <Content>
        <nav>
          <h2>Meus meetups</h2>
          <Link to="/new" >Novo meetup</Link>
        </nav>
        <ul>
          {meetups.map(meetup => (
            <Link key={String(meetup.id)} to={`/edit/${meetup.id}`}>
              <li>
                <strong>{meetup.title}</strong>
                <time>{meetup.formattedDate}</time>
              </li>
            </Link>
          ))}

        </ul>
      </Content>
    </Container>
  )
}
