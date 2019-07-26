Hero.destroy_all
Villain.destroy_all
Fight.destroy_all

spidey = Hero.create(name: "Spiderman", identity: "Peter Parker", age: rand(18), weight: rand(100))
aqua = Hero.create(name: "Aquaman", identity: "Arthur Curry", age: rand(18), weight: rand(100))
antman = Hero.create(name: "Antman", identity: "Paul Rudd", age: rand(18), weight: rand(100))
mallcop = Hero.create(name: "Mall Cop", identity: "Paul Blart", age: rand(18), weight: rand(100))
metroman = Hero.create(name: "Metroman", identity: "Brad Pitt", age: rand(18), weight: rand(100))

doc = Villain.create(name: "Doc 🐙", identity: "Otto Octavius", age: rand(18))
egg = Villain.create(name: "Dr. Eggman", identity: "Jim Carrey", age: rand(18))
ivy = Villain.create(name: "Poison Ivy", identity: "Pamela Isley", age: rand(18))
bowser = Villain.create(name: "Bowser", identity: "King Bowser", age: rand(18))
white = Villain.create(name: "Heisenburg", identity: "Walter White", age: rand(18))

Fight.create(hero_id: spidey.id, villain_id: doc.id, location: "Forest Hills")
Fight.create(hero_id: antman.id, villain_id: egg.id, location: "Toilet")
Fight.create(hero_id: mallcop.id, villain_id: white.id, location: "Roosevelt Field Mall")
