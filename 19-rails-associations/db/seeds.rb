harry = Doggo.create(name: "Harry Pawper", house: "Gryffindor", wand_core: "Phoenix Feather")
ron = Doggo.create(name: "Ron Beagley", house: "Gryffindor", wand_core: "Slugs")
hermione = Doggo.create(name: "Hermeow Granger", house: "Gryffindor", wand_core: "Catnip")

patronus = Spell.create(description: "Patronus Spell", incantation: "Expecto Patronum", intensity: 10)
avada = Spell.create(description: "Killing Spell", incantation: "Avada Kedavra", intensity: 12)
ridik = Spell.create(description: "Boggart Dealing Spell", incantation: "Ridikulus", intensity: 7)

DoggoSpell.create(doggo: harry, spell: patronus, location: "Lake")
DoggoSpell.create(doggo: ron, spell: patronus, location: "Quidditch Game")
DoggoSpell.create(doggo: hermione, spell: avada, location: "Black Friday Sale")
