import React from 'react';
import Profile from './Profile'
import ChannelList from './ChannelList'

export default class extends React.Component {

  render(){
    return <aside id="sidebar">
      <Profile />
      <ChannelList />
    </aside>
  }


}