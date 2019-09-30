import React from 'react';
import Room from './Room'
import uuid from 'uuid'

class House extends React.Component {

  state = {
    rooms: []
  }

  componentDidMount(){
    this.setState({
      rooms: [
        {
          id: uuid(),
          on: false
        },
        {
          id: uuid(),
          on: false
        },
        {
          id: uuid(),
          on: true
        },
        {
          id: uuid(),
          on: false
        },
        {
          id: uuid(),
          on: false
        },
        {
          id: uuid(),
          on: false
        },
        {
          id: uuid(),
          on: false
        },
        {
          id: uuid(),
          on: false
        },
        {
          id: uuid(),
          on: false
        },
      ]
    })
  }

  buttonClicked(id) {
    
    this.setState({

    })
  }

  allTheeRooms(){
    return this.state.rooms.map(room => <Room
                key={ room.id }
                id={ room.id }
                buttonClicked={ this.buttonClicked }  
                on={ room.on } />)
  }

  render(){
    // console.log(this.allTheeRooms())
    return (<div>
          {
            this.allTheeRooms()
            // <Room on={ true }/>
            // <Room on={ true }/>
            // <Room on={ false }/>
            // <Room on={ false }/>
          }
        </div>)
  }

}


export default House