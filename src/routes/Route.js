import React from 'react';
import {Route} from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const signed = true;

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
      <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>)} />


  );
}
