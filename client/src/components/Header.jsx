import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (

    <header>
      <Link id="anymal" to='/'>Anymal</Link>
      
      <div id="login">
        {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login/Register</button>
        }
      </div>
    </header>

  );
}

export default Header;