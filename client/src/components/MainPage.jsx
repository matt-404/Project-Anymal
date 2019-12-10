import React from 'react';
import { Link } from 'react-router-dom';

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <button><Link to='/categories'>Categories</Link></button>
        <button><Link to='/createpost'>Create a post</Link></button>

      </div>
    )
  };
}
