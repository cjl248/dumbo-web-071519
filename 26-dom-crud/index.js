
const allTheLis = document.querySelectorAll("#blobs li")

allTheLis.forEach(setUpOneLi)

function setUpOneLi(li) {
  li.addEventListener("click", blobClicked)
  li.addEventListener("contextmenu", blobRightClicked)
}

function blobClicked(e){
  e.target.innerText = "🥥"
}
function blobRightClicked(event) {
  event.preventDefault()
  event.target.remove()
}



// all_the_lis.each do |one_li|
//   dfomsgkjhasdfjkh
// end



// allTheLis.

document.querySelectorAll(".nav-button").forEach(function(button) {
  button.addEventListener("click", buttonClicked)
})


// const tacoButton = document.getElementById("taco")
// const chiliButton = document.getElementById("chili")
// const poopButton = document.getElementById("poop")
const blobList = document.querySelector("#blobs")

// tacoButton.addEventListener("click", buttonClicked)
// chiliButton.addEventListener("click", buttonClicked)
// poopButton.addEventListener("click", buttonClicked)

function buttonClicked(event){
  // blobList.innerHTML += `
  //   <li>🌮</li>
  // ` // there is a gotcha here!!!!


  const li = document.createElement("li")
  setUpOneLi(li)

  li.innerText = event.target.dataset.emoji

  // if (event.target.id === "taco") {
  //   li.innerText = "🌮"
  // } else if (event.target.id === "chili") {
  //   li.innerText = "🌶"
  // }

  blobList.prepend(li)
}






