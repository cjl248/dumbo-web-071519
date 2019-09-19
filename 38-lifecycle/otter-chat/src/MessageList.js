import React from 'react';
import Message from './Message'
 
class MessageList extends React.Component {

  render(){
    // console.log("message list renders")

    const { messages, likeButtonClicked } = this.props;
    // console.log("props", this.props)
    return <ul id="message-list">
      {
        messages.map((message) => {
          // console.log(message)
          return (<Message 
                    key={ message.id }  //so react will stop yelling at us
                    message={ message }
                    likeButtonClicked={ likeButtonClicked } />)
        })
      }
    </ul>
  }

  // componentDidMount(){
  //   console.log("Message list did mount")
  // }

}

export default MessageList

