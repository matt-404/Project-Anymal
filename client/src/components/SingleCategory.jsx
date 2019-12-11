import React, { Component } from 'react';
import { getOneCategory, deletePost } from '../services/api-helper';

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

  handleDelete = async (post_id) => {
    await deletePost(post_id);
    this.setState(prevState => ({
      category: {
        ...prevState.category,
        posts: prevState.category.posts.filter(post => {
          return post.id !== post_id
        })
      }
    }))
  }

  render() {
    const { category } = this.state;
    return (
      <div id="category">
        {
          category &&
          <>
            <h3>{category.title}</h3>
            {category.posts.map(post => (
              <>
                <p id="post-title">{post.title}</p>
                <img src={post.image_url} alt={post.title} />
                <button onClick={() => this.props.setPostEdit(this.props.catId, post)} >Edit</button>
                <button onClick={() => this.handleDelete(post.id)}>Delete</button>
              </>
            ))}
          </>
        }
      </div>
    );
  }
}

export default SingleCategory;