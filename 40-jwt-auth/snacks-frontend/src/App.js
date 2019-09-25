import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null
  }

  componentDidMount(){
    this.setState({
      token: localStorage.token
    })
  }

  isLoggedIn(){
    return !!this.state.token//!!this.state.loggedInUserId
  }
  
  logInUser = (token, userId) => {
    localStorage.token = token
    localStorage.userId = userId
    this.setState({
      token: token,
      loggedInUserId: userId
    })
  }

  logOutUser = () => {
    delete localStorage.token
    delete localStorage.userId
    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  render(){
    return (<main>
      {
        this.isLoggedIn() 
        ? <>
          <button onClick={ this.logOutUser }>LOG OUT</button>
          <SnackDashboard token={ this.state.token } loggedInUserId={ this.state.loggedInUserId } />
          </> 
        : <LogIn logInUser={ this.logInUser } />
      }
    </main>);
  }
}

export default App;
