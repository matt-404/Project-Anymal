import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { loginUser, registerUser, verifyUser } from './services/api-helper';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authFormData: {
        username: '',
        password: ''
      },
      currentUser: null
    }
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

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
      </div>
    );
  }
}

export default withRouter(App);
