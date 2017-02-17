import React from 'react';
import './header-style';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="Header">
      <Link to='/home'>
        <h1 className="Header-Title">Chuck Norris Joke Machine
        </h1>
      </Link>
      {window.location.pathname === '/settings' ?
      <Link to='/jokes'><button className="settings">JOKES
                        </button>
      </Link>:
          <Link to='/settings'>
          <button className='settings'>{window.location.pathname === '/settings' ? <p className='jokes-button'>JOKES</p> : <p>SETTINGS</p>}</button></Link>}
    </div>
  );
}

export default Header;
