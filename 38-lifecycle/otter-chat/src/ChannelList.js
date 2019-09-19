import React from 'react';

export default class ChannelList extends React.Component {


  state = {
    channels: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/channels")
      .then(res => res.json())
      .then(data => {
        this.setState({
          channels: data
        })
      })
  }

  liClicked = () => {

  }

  renderOneChannel = (element) => {
    return (<li 
        key={ element.id } 
        onClick={ this.liClicked }>
          #{ element.name }
        </li>)
  }

  renderChannels = () => {
    // if (this.state.channels.length === 0)
    //   return (<li>Loading...</li>)
    // else
      return this.state.channels.map(this.renderOneChannel);
  }


  render() { 
    return (<ul id="channel-list">
        { 
          this.state.channels.length ? this.renderChannels() : <li>LOADING</li>
        }
    </ul>)
}
}