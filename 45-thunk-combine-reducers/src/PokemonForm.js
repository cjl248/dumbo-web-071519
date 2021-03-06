import React from 'react'
import { connect } from 'react-redux'

const defaultState = {
  name: "",
  weight: 0
}

class PokemonForm extends React.Component {
  
  state = {
    ...defaultState
  }

  submitted = (e) => {
    e.preventDefault()

    this.props.makeNewPokemonPlease({
      name: this.state.name,
      weight: this.state.weight
    })
    this.setState({
      ...defaultState
    })
  }

  changed = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    // console.log(this.props)
    return (<form onSubmit={ this.submitted }>
      <h2>New Pokemon!</h2>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" value={ this.state.name } onChange={ this.changed }/>
      <br />
      <label htmlFor="weight">Weight:</label>
      <input id="weight" type="number" name="weight" value={ this.state.weight } onChange={ this.changed }/>
      <br />
      <input type="submit"/>
    </form>)
  }
}

// REACT ☝️
// ======================================
// REDUX connection code 👇

const makeNewPokemonPlease = (pokemon) => {
  return function(dispatch) {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemon)
    }).then(res => res.json())
    .then(pokemon => dispatch({
      type: "ADD_POKEMON",
      pokemon: pokemon
    }))
  }
}

const mapDispatchToProps = {
  makeNewPokemonPlease: makeNewPokemonPlease
}

export default connect(undefined, mapDispatchToProps)(PokemonForm)


