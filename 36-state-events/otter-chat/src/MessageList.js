import React from 'react';
import Message from './Message'
 
class MessageList extends React.Component {

  render(){
    const { messages, likeButtonClicked } = this.props;
    // console.log("props", this.props)
    return <ul id="message-list">
      {
        messages.map((message) => {
          // console.log(message)
          return (<Message 
                    key={ message.id } 
                    message={ message }
                    likeButtonClicked={ likeButtonClicked } />)
        })
      }
    </ul>
  }

}

export default MessageList

