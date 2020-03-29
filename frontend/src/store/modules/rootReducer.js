import { combineReducers } from 'redux';

import auth from './auth/reducer';
import recipient from './recipient/reducer';

export default combineReducers({ auth, recipient });
