import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
  pokemon: [],
  disneyPrincesses: [],
  movies: []
}

const store = createStore(reducer, initialState)


const addSirFetchdPokemonAction = { 
  type: "ADD_POKEMON",
  pokemon: {
    id: 840,
    name: "Sirfetch'd",
    weight: 274
  }
}

const addSnorlaxPokemonAction = { 
  type: "ADD_POKEMON",
  pokemon: {
    id: 143,
    name: "Snorlax",
    weight: 1000
  }
}

const updatePokemonWeightActionCreator = (id, weight) => {
  return {
    type: "UPDATE_POKEMON_WEIGHT",
    weight: weight,
    id: id
  }
}


store.dispatch(addSirFetchdPokemonAction)
store.dispatch(addSnorlaxPokemonAction)

store.dispatch(updatePokemonWeightActionCreator(143, 999))
store.dispatch(updatePokemonWeightActionCreator(143, 222))

// 
console.log(store)
console.log(store.getState())


