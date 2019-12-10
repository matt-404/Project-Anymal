import React from 'react';
import { Link } from 'react-router-dom';

function Categories(props) {
  return (
    <div>
      {props.categories.map(category => (
        <div key={category.id}>
          <Link to={`/categories/${category.id}`}><h3>{category.title}</h3></Link>
        </div>
      ))} 
    </div>
  );
}

export default Categories;