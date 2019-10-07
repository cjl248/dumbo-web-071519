const disneyPrincessReducer = function(state = null, action){
  console.log("disney princesses reducer reporting for duty")
  if (action.type == "FILL_DISNEY_PRINCESSES") {
    return action.disneyPrincesses
  }
  return state
}


export default disneyPrincessReducer