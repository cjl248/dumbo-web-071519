
document.addEventListener("DOMContentLoaded", function(){

  const tacoList = document.getElementById("items")
  const tacoButton = document.getElementById("taco")


  tacoList.addEventListener("click", function(event){
    // console.log(event)
    console.log(event.target)
    // console.log("clickedd!!!!")

    // console.log(event.target.className)
    // console.log(event.target.className === "pretty-button")

    if (event.target.classList.contains("pretty-button")) {
    // if (event.target.dataset.isDeleteButton === "true") {
      event.target.parentElement.remove() // kill your parents
    }
  })

  tacoButton.addEventListener("click", function(){

    // const li = document.createElement("li")
    // li.innerHTML = `
    //   <span>🌮</span>
    //   <button class="pretty-button">&times;</button>`


    // tacoList.append(li)

    tacoList.innerHTML += `<li class="taco item">
        <span>🌮</span>
        <button data-is-delete-button="true" class="pretty-button really-pretty-button">&times;</button>
      </li>`


    // const button = li.querySelector(".pretty-button")

    // console.log(button)

    // button.addEventListener("click", function(){
    //   console.log("delete was clicked")
    // })

  })

})