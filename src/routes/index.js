import React from  'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import New from '../pages/New';
import Details from '../pages/Details';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/details/:id" isPrivate component={Details} />
      <Route path="/new" isPrivate component={New} />
      <Route path="/edit/:id" isPrivate component={New} />
    </Switch>
  )
}
