
class Person {

  constructor(name, fullName) {
    // super()
    // console.log(this.name)
    this.name = name
    // console.log(this.name)
    this.fullName = fullName
    // console.log(name, fullName)
  }

  introduce() {
    // console.log(this)
    return `Hey, I'm ${ this.name }`
  }

}


class Instructor extends Person {

  introduce() {
    // console.log(this)
    return super.introduce() + " blah blha blh ablha "
  }

  teach(){
    return "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
  }

  static potato() {
    console.log(this)
    return "🥔"
  }
  // applyForTeachingJob()

}


babs = new Person("Barb", "Barbara Bush")
graham = new Instructor("Graham", "Graham Troyer-Joy")



// can you assign attributes to a function because it's an object
  // could we grab a full name off of it????

// can you create associations between JS objects?

// prototype

// wat video


// function introduce() {
//   // console.log(this)
//   return `Hey, I'm ${ this.fullName }`
// }


// const jack = {
//   fullName: "John Theodore Yes Alan Henry Charles Hilscher IV",
//   name: "Jack",
//   hometown: "Hannacroix, NY",
//   introduce: introduce
// }

// const graham = {
//   legalName: "Graham Aden Troyer-Joy",
//   name: "Graham",
//   hometown: "Oak Park, IL",
//   introduce: introduce
// }

// const ryan = {
//   fullName: "Ryan Ghaida",
//   name: "Ryan",
//   hometown: "Somewhere in Jersey, idk, this is what you get when you're late",
//   introduce: introduce
// }

// console.log(jack.introduce())
// console.log(graham.introduce())
// console.log(ryan.introduce())

// console.log(jack.introduce === graham.introduce)
// console.log(jack.introduce() === graham.introduce())















