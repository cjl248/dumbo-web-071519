import React from 'react';

class SnackDashboard extends React.Component {

  state = {
    allSnacks: [],
    mySnacks: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/snacks")
      .then(res => res.json())
      .then(data => this.setState({
        allSnacks: data
      }))

    const { loggedInUserId } = this.props

    if (loggedInUserId){
      fetch(`http://localhost:3000/users/${ loggedInUserId }/snacks`)
        .then(res => res.json())
        .then(data => this.setState({
          mySnacks: data
        }))
    }
  }

  render(){
    console.log(this.state)
    return <>
      <section>
        <h2>Snacks</h2>
        <ol>
          {
            // THIS IS NOT VERY DRY AND I OUGHT TO REFACTOR
            this.state.allSnacks.map(snack => <li>{ snack.name }</li>)
          }
        </ol>
      </section>
      <section>
        <h2>My Snacks</h2>
        <ol>
          {
            // THIS IS NOT VERY DRY AND I OUGHT TO REFACTOR
            this.state.mySnacks.map(snack => <li>{ snack.name }</li>)
          }
        </ol>
      </section>
    </>
  }

}

export default SnackDashboard