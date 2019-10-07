import React from 'react'
import { connect } from 'react-redux'

class PokemonList extends React.Component {

  componentDidMount(){
    this.props.fetchPokemon()
  }

  render(){
    console.log(this.props.pokemon)
    return (<ul>
      {
        this.props.pokemon.map(poke => <li key={ poke.id }>
            { poke.name }
          </li>)
      }
    </ul>)
  }
}

// REACT ☝️
// ======================================
// REDUX 👇
const mapStateToProps = (state) => {
  console.log(state)
  // console.log(state.pokemon)
  return {
    pokemon: state.pokemon,
    // princesses: state.disneyPrincesses
  }
}

const fetchPokemon = () => {
  // console.log("fetch pokemon is about to return")
  return function(dispatch){
    // console.log("about to fetch")

    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemon => dispatch({
        type: "FILL_POKEMON",
        pokemon: pokemon
      })
    )
  }
}

// const wrapWithConnect = connect(mapStateToProps)
// const PokemonListConnectedToRedux = wrapWithConnect(PokemonList)
// export default PokemonListConnectedToRedux

export default connect(mapStateToProps, { fetchPokemon: fetchPokemon })(PokemonList)




