import React from 'react';

function EditPost(props) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleUpdate(props.categoryId, props.postId)
      }}>
        <h2>Edit a post</h2>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={props.formData.title}
          onChange={props.handleChange}
        />
        <label htmlFor="image_url">Image url:</label>
        <input
          id="image_url"
          type="text"
          name="image_url"
          value={props.formData.image_url}
          onChange={props.handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditPost;