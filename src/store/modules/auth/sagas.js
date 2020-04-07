import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';

import { signInSuccess } from './actions';

// eslint-disable-next-line consistent-return
export function* signIn({ payload }) {
  const { email, password } = payload;

  const user = {
    name: 'admin',
    email: 'admin@sistemadecomunicacao.com.br',
  };

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYTBkYTYwN2JhY2JmMjMzMGE0ZWM2ZSIsImlhdCI6MTU4MzI4MzAxMywiZXhwIjoxNTgzODg3ODEzfQ.GbJ_lLFQ9QA26megnMi2jd3lq7fR3RNUH2J6rlDPW0c';

  yield put(signInSuccess(token, user));

  toast.success('Login realizado com sucesso!');

  history.push('/contact');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
}

export function signOut() {
  history.push('/');
}

// takeLatest = Pegar sempre a ultima requisição
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
