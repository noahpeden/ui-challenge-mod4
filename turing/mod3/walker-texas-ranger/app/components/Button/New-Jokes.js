import React from 'react';

const handleJokes = () => {
  console.log('this handles jokes');
}

const NewJokes = (props) => {

  return (
    <button className='new-jokes' onClick={() => handleJokes() }>New Jokes</button>
  );
}

export default NewJokes;
