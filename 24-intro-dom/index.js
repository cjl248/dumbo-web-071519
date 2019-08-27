const spiceGirls = [
  {
    "id": 1,
    "name": "Melanie Brown",
    "shortName": "Mel B",
    "adjective": "Scary"
  },
  {
    "id": 3,
    "name": "Geri Halliwell",
    "shortName": "Geri",
    "adjective": "Ginger"
  },
  {
    "id": 2,
    "name": "Melanie Chisolm",
    "shortName": "Mel C",
    "adjective": "Sporty"
  },
  {
    "id": 4,
    "name": "Victoria Beckham (neé Adams)",
    "shortName": "Victoria",
    "adjective": "Posh"
  },
  {
    "id": 5,
    "name": "Emma Bunton",
    "shortName": "Emma",
    "adjective": "Baby"
  }
]

const ul = document.getElementById("spice-girls")

function slapSomeSpiceOnTheDOM(spice){

  // console.log("this is fine.")
  const li = document.createElement("li")

  li.id = "spice-" + spice.id
  // li.setAttribute("id", "potato")

  // get the information from each object
  // slap the information into the LI we just made 
  li.innerHTML = `
    <h2 class="short-name">${ spice.shortName }</h2>
    <h3>(${ spice.adjective } Spice)</h3>
  `

  // put the li into the UL
  return li
}

// loop through spice girls
for (let i = 0; i < spiceGirls.length; i++) {
  const spice = spiceGirls[i];
  // console.log(spice)

  // create an element (li) 
  ul.appendChild(slapSomeSpiceOnTheDOM(spice, [], {}, "dkfjhsdkjf", 48))
}

// delete geri
const geri = document.querySelector("#spice-3")
// console.log(geri)
geri.remove()


// change victoria's name to Vikki Bex
let victoria = document.querySelector("#spice-4")
console.log(victoria)

// console.log(document.querySelector("h2")) // first one in the whole doc
// console.log(victoria.querySelector("h2"))

const vickyH2 = victoria.querySelector(".short-name")

console.log(vickyH2)

vickyH2.innerText = "Vikki Bex"


console.log(typeof vickyH2)
console.dir(vickyH2)


// find the spice girl with the spiciest (longest) adjective








