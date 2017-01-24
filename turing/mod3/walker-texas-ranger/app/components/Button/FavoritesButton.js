import React from 'react';

const handleFavorites = () => {
  console.log("this is handling favorites");
}

const FavoritesBtn = (props) => {
  return (
    <button className='favorites-btn' onClick={() => handleFavorites() }>Favorites</button>
  );
}

export default FavoritesBtn;
