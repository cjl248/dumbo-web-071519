import React from 'react';


const Room = props => {
  const className = "room" + (props.on ? " on" : "")
  // const buttonClick = (event) => {
  //   props.buttonClicked(props.id)
  // } 
  return <button onClick={ () => props.buttonClicked(props.id) } className={ className }></button>
}

export default Room

// export default props => {
//   return <button className="room"></button>
// }