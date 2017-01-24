import React from 'react'
import { render } from 'react-dom'
import './styles';
import Header from './components/Header/Header.js';
import InputArea from './components/Main/input';

const App = () => {
  return (
    <div>
    <Header />
    <InputArea />
    </div>
  );
}

render(<App />, document.querySelector('.application'));
