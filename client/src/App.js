import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, getAllCategories, postPost, putPost } from './services/api-helper';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Categories from './components/Categories';
import SingleCategory from './components/SingleCategory';
import MainPage from './components/MainPage';
import CreatePosts from './components/CreatePosts';
import EditPost from './components/EditPost';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authFormData: {
        username: '',
        password: ''
      },
      currentUser: null,
      categories: [],
      postFormData: {
        title: "",
        image_url: ""
      }
    }
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
    this.fetchCategories()
  }


  // ================================================
  // ================== Auth ========================
  // ================================================

  handleLoginButton = () => {
    this.props.history.push('/login')
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }))
  }

  // ================================================
  // ================== Categories ==================
  // ================================================

  fetchCategories = async () => {
    const categories = await getAllCategories();
    this.setState({
      categories
    })
  }

  // ================================================
  // ================== Posts =======================
  // ================================================

  createPost = async (postData) => {
    const { category_id, ...data } = postData
    await postPost(category_id, data)
    this.props.history.push(`/categories/${category_id}`)
  }

  setPostEdit = (catId, post) => {
    const { title, image_url } = post
    this.setState({
      postFormData: { title, image_url }
    })
    this.props.history.push(`/categories/${catId}/posts/${post.id}/edit`)
  }

  postHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      postFormData: {
        ...prevState.postFormData,
        [name]: value
      }
    }))
  }

  postHandleUpdate = async (catId, postId) => {
    await putPost(postId, this.state.postFormData);
    this.props.history.push(`/categories/${catId}`)
  }

  // ================================================
  // ================== Render ======================
  // ================================================

  render() {
    return (
      <div className="App">
        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            formData={this.state.authFormData}
            handleChange={this.authHandleChange}
          />
        )} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            formData={this.state.authFormData}
            handleChange={this.authHandleChange}
          />
        )} />
        <MainPage />
        <Route exact path="/categories" render={() => (
          <Categories
            categories={this.state.categories}
          />
        )} />
        <Route exact path="/categories/:id" render={(props) => {
          const catId = props.match.params.id;
          return <SingleCategory
            catId={catId}
            setPostEdit={this.setPostEdit}
          />
        }} />
        <Route exact path="/createpost" render={() => (
          <CreatePosts
            createPost={this.createPost}
            categories={this.state.categories}
          />
        )} />
        <Route exact path="/categories/:category_id/posts/:id/edit" render={(props) => {
          const { category_id, id } = props.match.params;
          return <EditPost
            postId={id}
            categoryId={category_id}
            formData={this.state.postFormData}
            handleChange={this.postHandleChange}
            handleUpdate={this.postHandleUpdate}
          />
        }} />
      </div>
    );
  }
}

export default withRouter(App);
