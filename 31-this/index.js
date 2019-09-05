


// const button = document.createElement("button")
// button.innerText = "sdflhjsdf"
// document.body.append(button)

// button.addEventListener("click", function(event){
//   this.innerText += 7
// })


// class Potato {

//   constructor(){
//     // console.log(this)
//     // [1.2, 3, 4, 6, 7, 98, 9].forEach(function(element){
//     //   console.log(element)
//     //   console.log(this)
//     // })

//     

//   }

// }

// new Potato()

/*

function introduce() {
  console.log(this)
  return `Hey, I'm ${ this.fullName }`
}

const jack = {
  fullName: "John Theodore Yes Alan Henry Charles Hilscher IV",
  name: "Jack",
  hometown: "Hannacroix, NY",
  introduce: introduce
}

const graham = {
  legalName: "Graham Aden Troyer-Joy",
  name: "Graham",
  hometown: "Oak Park, IL",
  introduce: introduce
}

const ryan = {
  fullName: "Ryan Ghaida",
  name: "Ryan",
  hometown: "Somewhere in Jersey, idk, this is what you get when you're late",
  introduce: introduce//introduce.bind(graham)
}

// console.log(ryan.introduce())

var method = ryan.introduce;
// console.log(method())

// window.fetch("https://dog.ceo/api/breeds/image/random")

// console.log(jack.introduce())
// console.log(graham.introduce())
// console.log(ryan.introduce())

// console.log(jack.introduce === graham.introduce)
// console.log(jack.introduce() === graham.introduce())
*/

class ColorChanger {

  constructor(color){
    this.color = color

    this.button = document.createElement("button");
    this.button.innerText = `blort ${ this.color }`

    this.onButtonClick = this.onButtonClick.bind(this)

    // console.log(this) // the ColorChanger instance
    // console.log(this.button) // the DOM node we created on 77
    this.button.addEventListener("click", this.onButtonClick)

    document.body.append(this.button)
  }

  onButtonClick() {
    // console.log("will it blend")
    console.log(this)
    document.body.style.backgroundColor = this.color;
  }

}

var thing1 = new ColorChanger("#f00");
var thing2 = new ColorChanger("#21f");
var thing3 = new ColorChanger("#ffbf00");
var thing4 = new ColorChanger("pink");
var thing5 = new ColorChanger("beige");
var thing6 = new ColorChanger("#e34234");
var thing7 = new ColorChanger("rgb(12,160,74)");


// ["#f00"].forEach(function(color){
//   // console.log(this)
//   new ColorChanger(color);
// })






