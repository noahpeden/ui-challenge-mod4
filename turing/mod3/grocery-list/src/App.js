import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery'

class App extends Component {
  render() {
    return (
      <Grocery name={'Bananas'} starred={false} purchased={true}/>
    );
  }
}

export default App;
