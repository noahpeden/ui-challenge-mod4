import React from 'react';
import NewJokes from '../Button/New-Jokes';
import FavoritesBtn from '../Button/FavoritesButton';


const InputArea = () => {
  return (
    <div className="input-area">
      <NewJokes />
      <input placeholder="enter number of jokes"></input>
      <FavoritesBtn />
    </div>
  );
}

export default InputArea;
