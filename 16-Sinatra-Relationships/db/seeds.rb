Student.destroy_all

ryan = Student.create(name: "Ryan", age: 26, hometown: "NYC")

mackenzie = Student.create(name: "Mackenzie", age: 22, hometown: "NYC")

harry_potter = Student.create(name: "Harry", age: 12343, hometown: "NYC")

student_names = [
  "Alessandra Vertrees",
  "Aliciea Dawn Suechin",
  "Ashna Shah",
  "Carlos Guzman",
  "Chris Liendo",
  "Cihad Aldanmaz",
  "Gianfranco Nuschese",
  "Gulnoza Muminova-Boltaeva",
  "Janet Mendez",
  "Jason Lewis",
  "Lisa LaRochelle",
  "Mackenzie Pech",
  "Martin Crabtree",
  "Megan Adams",
  "Oscar Ochoa Cerrato",
  "Ross Perkel"
]

student_names.shuffle.each do |student_name|
  Student.create(name: student_name, age: rand(50), hometown: "NYC")
end

oscar = Student.find_by(name: "Oscar Ochoa Cerrato")
carlos = Student.find_by(name: "Carlos Guzman")
janet = Student.find_by(name: "Janet Mendez")
gulnoza = Student.find_by(name: "Gulnoza Muminova-Boltaeva")

Project.create(student_id: oscar.id, name: "Oxygen Burner", wow_factor: 10)
Project.create(name: "Saving Params from Space", wow_factor: 11, student: carlos )
janet.projects.create(name: "Operation Kitten Takeover" , wow_factor: 12)
gulnoza.projects << Project.new(name: "Bringing the Splish to the Splash", wow_factor: 13)





















#
