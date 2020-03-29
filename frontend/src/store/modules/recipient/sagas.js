import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { recipientFailure, createRecipientSuccess } from './actions';

export function* createRecipient({ payload }) {
  try {
    const response = yield call(api.post, 'recipients', payload);

    yield put(createRecipientSuccess(response.data));
  } catch (error) {
    yield put(recipientFailure());
  }
}

export function* updateRecipient({ payload }) {
  try {
    const id = 1;

    const response = yield call(api.put, 'recipients', {
      params: id,
      body: payload,
    });

    yield put(createRecipientSuccess(response.data));
  } catch (error) {
    yield put(recipientFailure());
  }
}

export default all([
  takeLatest('@recipient/CREATE_RECIPIENT_REQUEST', createRecipient),
  takeLatest('@recipient/UPDATE_RECIPIENT_REQUEST', updateRecipient),
]);
