import React from 'react'
import { connect } from 'react-redux'

class DisneyPrincessList extends React.Component {

  componentDidMount(){
    this.props.fetchDisneyPrincess()
  }

  render(){
    // console.log(this.props)
    return (<ul>
      {
        this.props.disneyPrincesses.map(princess => <li key={ princess.id }>
            { princess.name }
          </li>)
      }
    </ul>)
  }
}

// REACT ☝️
// ======================================
// REDUX 👇

const mapStateToProps = (state) => {
  return {
    disneyPrincesses: state.disneyPrincesses,
  }
}

const fetchDisneyPrincess = () => {
  return function(dispatch){
    fetch("http://localhost:3000/disneyPrincesses")
    .then(res => res.json())
    .then(disneyPrincesses => dispatch({
        type: "FILL_DISNEY_PRINCESSES",
        disneyPrincesses: disneyPrincesses
      })
    )
  }
}


export default connect(mapStateToProps, { fetchDisneyPrincess: fetchDisneyPrincess })(DisneyPrincessList)




