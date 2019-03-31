import React, { Component } from 'react';
import './App.css';
import Crypto from './Crypto.js';
import bitcoin from './bitcoin.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <header className="crypto-header">
      <img src={bitcoin} className="App-bitcoin" alt="bitcoin" />
      <h1 className="user-list-title">Crypto Rate</h1></header>
      
        <Crypto />
      </div>
    );
  }
}

export default App;
