/**
 * @format
 */
// require React first
const React = require('react');

// Augment React module with PropTypes

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';

import configureStore from './store';

const store = configureStore()

const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )
  
  AppRegistry.registerComponent(appName, () => RNRedux);

//AppRegistry.registerComponent(appName, () => App);
