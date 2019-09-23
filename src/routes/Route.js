import React from 'react';
import {Route} from 'react-router-dom';
// import { Container } from './styles';

import DefaultLayout from '../pages/_layouts/default';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {



  return (
    <DefaultLayout>
      <Route {...rest} />
    </DefaultLayout>
  );
}
