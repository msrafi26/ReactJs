import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import LanguagePage from './container/LanguagePage';
const axios = require('axios').default;
const instance = axios.create(
  { baseURL: window.location.origin }
);

class App extends React.Component {

  render() {
    return (
      <LanguagePage />
    );
  }
}
export default App;
