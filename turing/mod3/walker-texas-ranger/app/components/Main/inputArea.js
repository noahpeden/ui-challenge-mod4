import React, {Component} from 'react';
import NewJokes from '../Button/New-Jokes';
import FavoritesBtn from '../Button/FavoritesButton';
import './inputstyles';


const InputArea = (props) => {
  return (
    <div className="input-area">
      <input
        className='input-number'
        value={props.jokesNum}
        onChange={(e) => props.handleChange(e)}>
      </input>
    </div>
    )
  }

export default InputArea;
