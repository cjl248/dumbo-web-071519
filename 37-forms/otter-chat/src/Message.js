import React from 'react';

class Message extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     numberOfLikes: 0
  //   }
  //   this.onLikeButtonClick = this.onLikeButtonClick.bind(this)
  // }

  // state = {
  //   numberOfLikes: 0,
  //   potato: "🥔"
  // }

  // onLikeButtonClick(){
  //   this.setState({
  //     numberOfLikes: this.state.numberOfLikes + 1
  //   })
  // }

  // onLikeButtonClick = () => {
  //   // console.log(this)
  //   this.setState({
  //     numberOfLikes: this.state.numberOfLikes + 1
  //   })
  //   /*, () => {
  //     // console.log(this.state.numberOfLikes)
  //   })*/

  //   // console.log(this.state.numberOfLikes)
  // }
  
  render(){
    const { id, sender, text, numberOfLikes } = this.props.message
    return (<li>
        { sender }: { text } 
        <button onClick={ (event) => this.props.likeButtonClicked(id) }>
          🌶 { numberOfLikes }
        </button> 
      </li>)
  }

}

export default Message;