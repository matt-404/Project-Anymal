import React, { Component } from 'react';

class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image_url: "",
      category_id: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.createPost(this.state);
          this.setState({
            title: "",
            image_url: "",
            category_id: ""
          })
        }}>
          <h2>Create a post</h2>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="image_url">Image url:</label>
          <input
            id="image_url"
            type="text"
            name="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <select name="category_id" onChange={this.handleChange}>
            <option value="">Select a category</option>
            {this.props.categories.map(category => (
              <option value={category.id}>{category.title}</option>
            ))}
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreatePosts;