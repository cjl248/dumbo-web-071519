import uuid from 'uuid'



const updateOnePokemon = (pokemon, id, updateToMake) => {
  return pokemon.map(pokemon => {
    if (pokemon.id === id) {
      // change the weight
      return {
        ...pokemon,
        ...updateToMake
      }
    } else {
      return pokemon
    }
  })
}


const pokemonReducer = function(state = null, action){
  console.log(state)
  console.log("pokemon reducer reporting for duty")

  // console.log(action) 

  switch(action.type) {
    case "FILL_POKEMON":
      return action.pokemon
    case "ADD_POKEMON": 
      return [ ...state, { id: uuid(), ...action.pokemon } ]
    case "UPDATE_POKEMON_WEIGHT":
      return updateOnePokemon(state.pokemon, action.id, { weight: action.weight })
    default: 
      return state
  }
}


export default pokemonReducer

