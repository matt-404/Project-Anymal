import React, { Component } from 'react';
import { getOneCategory } from '../services/api-helper';

class SingleCategory extends Component {
  constructor() {
    super();
    this.state = {
      category: null
    }
  }

  async componentDidMount() {
    const category = await getOneCategory(this.props.catId)
    this.setState({
      category
    })
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        {
          category &&
          <>
            <h3>{category.title}</h3>
            {category.posts.map(post => (
              <>
                <p>{post.title}</p>
                <img src={post.image_url} alt={post.title} />
              </>
            ))}
          </>
        }
      </div>
    );
  }
}

export default SingleCategory;