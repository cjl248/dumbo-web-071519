import React from 'react';

class Hog extends React.Component {

  state = {
    isShowing: false
  }

  moreDetailsClick = (event) => {
    // this.state.isShowing = true
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  maybeRenderHogDetails(){
    const { specialty, weight, 'highest medal achieved': highestMedalAchieved, greased } = this.props.hog
    return <dl>
      <dt>
        Specialty
      </dt>
      <dd>
        { specialty }
      </dd>
      <dt>
        Weight
      </dt>
      <dd>
        { weight }
      </dd>
      <dt>
        Highest Medal Achieved
      </dt>
      <dd>
        { highestMedalAchieved }
      </dd>
      <dt>
        Greased?
      </dt>
      <dd>
        { greased ? "Yeah!" : "Nah." }
      </dd>
    </dl>
  }

  render(){
    const { name } = this.props.hog
    return <li className="hog">
      <h3>{ name }</h3>
      <img src={ this.props.imgUrl } />
      {
        this.state.isShowing ? this.maybeRenderHogDetails() : ""
      }
      <button onClick={ this.moreDetailsClick }>
        { this.state.isShowing ? "Hide" : "Show"} details
      </button>
    </li>
  }
}

export default Hog