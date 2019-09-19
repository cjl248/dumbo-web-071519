import React from 'react';
 
class MessageForm extends React.Component {

  state = {
    text: "",
    sender: ""
  }

  formSubmitted = (event) => {
    // console.log("submit")
    event.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      sender: this.state.sender,
    })
    this.setState({
      text: "",
      sender: "",
    })
    // console.log("submitted")
  }

  onChange = (event) => {
    console.log("change")
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // onChangeAuthor = (event) => {
  //   this.setState({
  //     sender: event.target.value
  //   })
  // }

  isValid = () => {
    return this.state.text.length === 0 || this.state.sender.length === 0 
  }

  render(){
    // console.log("message form renders")

    // console.log("render")
    return (<form 
              id="message-form" 
              onSubmit={ this.formSubmitted }>
      <input 
        type="text" 
        onChange={ this.onChange } 
        placeholder="What to say?" 
        name="text" value={ this.state.text } />
      <input 
        type="text" 
        placeholder="Who are you?" 
        onChange={ this.onChange }
        name="sender" value={ this.state.sender } />
      <input type="submit" 
        disabled={ this.isValid() } />
    </form>)
  }

  // componentDidMount(){
  //   console.log("Message form did mount")
  // }

}

export default MessageForm

