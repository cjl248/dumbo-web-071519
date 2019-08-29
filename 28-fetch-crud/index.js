
document.addEventListener("DOMContentLoaded", function(){

  fetch("http://localhost:3000/to_do_items")
    .then(response => response.json())
    .then(data => {
      data.forEach(slapOneToDoOnTheDom)
    })

  const form = document.querySelector("#new-to-do")
  form.addEventListener("submit", function(){
    event.preventDefault()

    const form = event.target;
    const input = form.title;
    const title = input.value;

    form.reset()

    fetch("http://localhost:3000/to_do_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // mime type of what we're sending to the server
      },
      body: JSON.stringify({
        title: title,
        done: false
      })
    }).then(res => res.json())
      .then(slapOneToDoOnTheDom)

  })

})



const slapOneToDoOnTheDom = ( nn                        ) => { 
  const ol = document.querySelector("#to-do-items")

  // console.log(index)

  ol.innerHTML += `<li class="item">
    <input id="to-do-item-${ toDoItem.id }" type="checkbox" ${ toDoItem.done ? "checked" : "" } />
    <label for="to-do-item-${ toDoItem.id }" class="js-title middle aligned content">${ toDoItem.title }</label>
    <button>×</button>
  </li>
  ` /// this is dangerous; children are being killed

  // console.log(toDoItem) 
}