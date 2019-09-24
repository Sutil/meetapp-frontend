import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import actionNames from '~/store/actionNames';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try{
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch(err) {
    toast.error('Falha ao tentar entrar. Verifique seus dados.')
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name, email, password
    });

    toast.success('Agora, faça login na aplicação!');

    history.push('/');

  } catch(err) {
    toast.error('Falha ao criar cadastro. Verifique seus dados.'+err)
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if(!payload) return;

  const { token } = payload.auth;

  if(token)
    api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
  history.push('/')
}

export default all([
  takeLatest(actionNames.REHYDRATE, setToken),
  takeLatest(actionNames.AUTH_SIGN_IN_REQUEST, signIn),
  takeLatest(actionNames.AUTH_SIGN_UP_REQUEST, signUp),
  takeLatest(actionNames.AUTH_SIGN_OUT, signOut),
]);
