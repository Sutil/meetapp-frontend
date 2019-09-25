import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@rocketseat/unform';


export default function Textarea({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    console.tron.log('test', defaultValue);
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({ name: fieldName, ref: ref.current, path: 'value' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, fieldName]);

  const props = {
    ...rest,
    ref,
    id: fieldName,
    name: fieldName,
    defaultValue,
    value,
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}

      <textarea onChange={e => setValue(e.target.value)} {...props} />

      {error && <span>{error}</span>}
    </>
  );
}
