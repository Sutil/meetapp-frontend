import React, {useEffect, useState} from 'react';
import { Form, Input } from '@rocketseat/unform';
import Textarea from './Textarea';
import { Container, Content } from './styles';
import ImageInput from './ImageInput';
import DatePicker from './DatePicker';
import api from '../../services/api';
import history from '../../services/history';
import { toast } from 'react-toastify';

export default function New({match}) {

  const [meetup, setMeetup] = useState({});
  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);

  console.log('teste')

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);
      setMeetup(response.data);
      setImage(response.data.image);
    }
    if (id) {
      loadMeetup();
    }
  }, [id]);

  useEffect(() => {
    const {params} = match;
    if(params.id) {
      setId(params.id)
    }
  },[match]);

  async function handleSubmit(data) {
    try {
      if(id) {
        await api.put(`meetups/${id}`, data);
      } else {
        await api.post('meetups', data);
      }

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
          <Textarea name="description" placeholder="Descrição completa" />

          <DatePicker name="date" value={meetup && meetup.date} />
          <Input name="location" type="text" placeholder="Localização" />
          <button>Salvar meetup</button>
        </Form>
      </Content>
    </Container>
  );
}
