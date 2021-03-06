
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


const reducer = function(state, action){
  // console.log(state)
  // console.log(action) 

  switch(action.type) {
    case "ADD_POKEMON": 
      return {
        ...state,
        pokemon: [ ...state.pokemon, action.pokemon ]
      }
    case "UPDATE_POKEMON_WEIGHT":
      return {
        ...state,
        pokemon: updateOnePokemon(state.pokemon, action.id, { weight: action.weight })
      }
    default: 
      return state
  }
}


export default reducer

