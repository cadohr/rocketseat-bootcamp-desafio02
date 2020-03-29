import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import recipient from './recipient/sagas';

export default function* rootSaga() {
  return yield all([auth, recipient]);
}
