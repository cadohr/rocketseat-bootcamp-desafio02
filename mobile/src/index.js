import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import App from './App';

import colors from '~/styles/colors';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <App />
      </PersistGate>
    </Provider>
  );
}
