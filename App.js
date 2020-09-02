/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/routes/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
