import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  state = {
    loggedInUserId: null
  }

  isLoggedIn(){
    return !!this.state.loggedInUserId
  }
  loggedInUserId(){
    return this.state.loggedInUserId
  }

  setLoggedInUserId = (userId) => {
    this.setState({
      loggedInUserId: userId
    })
  }

  render(){
    return (<main>
      {
        this.isLoggedIn() 
        ? <SnackDashboard loggedInUserId={ this.loggedInUserId() } /> 
        : <LogIn setLoggedInUserId={ this.setLoggedInUserId } />
      }
    </main>);
  }
}

export default App;
