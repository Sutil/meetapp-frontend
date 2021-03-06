import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import api from '~/services/api';

export default function ImageInput({value, name}) {

  console.log('image input')

  let { defaultValue, registerField } = useField('image');

  if(!defaultValue) {
    defaultValue = value;
  }

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(
    () => {
      if(ref.current) {
        registerField({
          name: name,
          ref: ref.current,
          path: 'dataset.file'
        });
      }
    },
    [ref.current, name] // eslint-disable-line
  )

  useEffect(() => {
    if(value) {
      setPreview(value.url);
    }
  }, [value])

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="image">
        {
          preview
          ? <img src={preview} alt="Meetup" />
          : <div>Selecione uma imagem</div>
        }

        <input
          type="file"
          id="image"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref} />
      </label>
    </Container>
  );
}
