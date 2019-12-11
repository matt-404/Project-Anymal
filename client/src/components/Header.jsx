import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (

    <header>
      <div className="header">
        <p>Not GitHub<br></br>cat btw ^_^</p>
        <Link to="/">
          <img id="logo" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="logo"></img>
        </Link>
        <p id="home"><span className="greenText bold">H</span><span className="blueText bold">O</span>
        <span className="brownText bold">M</span><span className="redText bold">E</span></p>
      </div>
      <h1>Anymal</h1>
      <div id="login">
        {props.currentUser
          ?
          <>
            <p>Hello, {props.currentUser.username}</p>
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