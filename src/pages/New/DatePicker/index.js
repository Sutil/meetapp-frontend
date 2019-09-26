import React, { useRef, useEffect, useState } from 'react';
import ReactDatetimePicker from 'react-datetime-picker';
import { parseISO } from 'date-fns';
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
      path: 'props.value',
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

  console.log(selected);
  return (
    <>

      <ReactDatetimePicker
        placeholderText="Data do meetup"
        name={fieldName}
        value={selected}
        onChange={date => {setSelected(date)}}
        ref={ref}
        disableClock={true}
        previousMonthButtonLabel="<"
        nextMonthButtonLabel=">"
        locale="pt"
       />
      {error && <span>{error}</span>}
    </>
  );
}
