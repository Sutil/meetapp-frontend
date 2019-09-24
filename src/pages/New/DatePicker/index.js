import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, value }) {
  const ref = useRef();
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  useEffect(() => {
    if(value) {
      setSelected(parseISO(value));
    }
  }, [value])

  return (
    <>
      <ReactDatePicker
        placeholderText="Data do meetup"
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        dateFormat="dd/MM/yyyy"
        ref={ref}
        previousMonthButtonLabel="<"
        nextMonthButtonLabel=">"
        locale={pt}
      />
      {error && <span>{error}</span>}
    </>
  );
}
