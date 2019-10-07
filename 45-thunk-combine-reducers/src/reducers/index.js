import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import disneyPrincessReducer from './disneyPrincessReducer'

export default combineReducers({
  pokemon: pokemonReducer,
  disneyPrincesses: disneyPrincessReducer
})