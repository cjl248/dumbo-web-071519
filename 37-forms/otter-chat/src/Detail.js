import React from 'react';

import MessageList from './MessageList'
import MessageForm from './MessageForm'
import uuid from 'uuid'

// const channel = 

 
class Detail extends React.Component {

  state = {
    channelName: "#splashing",
    nextAvailableId: 7,
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

  createMessage = (newMessage) => {
    this.setState({
      nextAvailableId: this.state.nextAvailableId + 1,
      messages: [
        ...this.state.messages,
        {
          ...newMessage,
          numberOfLikes: 0,
          id: uuid()//this.state.nextAvailableId
        }
      ]
    })
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
      <h1 id="channel-title">{ this.state.channelName }</h1>
      <MessageList 
        messages={ this.state.messages } 
        likeButtonClicked={ this.likeButtonClicked } />
      <MessageForm onSubmit={ this.createMessage } />
    </main>
  }

}

export default Detail

