import React, {useEffect, useState} from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, Content } from './styles';
import ImageInput from './ImageInput';
import DatePicker from './DatePicker';
import api from '../../services/api';
import history from '../../services/history';
import { toast } from 'react-toastify';

export default function New({match}) {

  const [meetup, setMeetup] = useState({});
  const [image, setImage] = useState(null);

  async function loadMeetup(id) {
    const response = await api.get(`meetups/${id}`);
    setMeetup(response.data);
    setImage(response.data.image);
  }

  useEffect(() => {
    const {params} = match;
    if(params.id) {
      loadMeetup(params.id);
    }
  },[match]);

  async function handleSubmit(data) {
    try {
      await api.post('meetups', data);

      history.push('/dashboard');
    } catch(err) {
      toast.error('Erro ao criar meetup');
    }
  }

  return (
    <Container>
      <Content>
        <Form initialData={meetup} onSubmit={handleSubmit} >
          <ImageInput name="file_id" value={image} />
          <Input name="title" type="text" placeholder="Título do meetup" />
          <Input name="description" placeholder="Descrição completa" />
          <DatePicker name="date" value={meetup && meetup.date} />
          <Input name="location" type="text" placeholder="Localização" />
          <button>Salvar meetup</button>
        </Form>
      </Content>
    </Container>
  );
}
