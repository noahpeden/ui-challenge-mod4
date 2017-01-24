import React from 'react';

const Button = (props) => {
  return (
    <button className='settings' onClick={() => props.handleClick() }>Settings</button>
  );
}

export default Button;
