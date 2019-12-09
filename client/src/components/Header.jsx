import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h1><Link to='/'>Anymal</Link></h1>
      <div>
        {props.currentUser
        ?
        <>
          <p>{props.currentUser.username}</p>
          <button onClick={props.handleLogout}>logout</button>
        </>
        :
        <button onClick={props.handleLoginButton}>Login/register</button>
       }
      </div>
    </header>
  );
}

export default Header;