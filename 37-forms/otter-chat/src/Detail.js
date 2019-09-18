import React from 'react';

import MessageList from './MessageList'
import MessageForm from './MessageForm'

// const channel = 

 
class Detail extends React.Component {

  state = {
    name: "#splashing",
    messages: [
      {
          id: 1,
          sender: "Miranda",
          text: "Ork",
          numberOfLikes: 0
      },
      {
          id: 2,
          sender: "Miranda",
          text: "Erk",
          numberOfLikes: 0
      },
      {
          id: 3,
          sender: "Miranda",
          text: "Hrk",
          numberOfLikes: 0
      },
      {
          id: 4,
          sender: "Melvin",
          text: "Ark",
          numberOfLikes: 0
      },
      {
          id: 5,
          sender: "Melvin",
          text: "Thrk",
          numberOfLikes: 0
      },
      {
          id: 6,
          sender: "Miranda",
          text: "Bark",
          numberOfLikes: 0
      },
    ]
  }

  likeButtonClicked = (id) =>{
    console.log(id)
    this.setState({
      messages: this.state.messages.map(message => {
        if (message.id === id)
          return {
            ...message,
            numberOfLikes: message.numberOfLikes + 1
          }
        else
          return message
      })
    })
  }

  render(){
    return <main id="detail">
      <h1 id="channel-title">{ this.state.name }</h1>
      <MessageList 
        messages={ this.state.messages } 
        likeButtonClicked={ this.likeButtonClicked } />
      <MessageForm />
    </main>
  }

}

export default Detail

