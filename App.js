import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux'
import store from './src/redux/store';



export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}

