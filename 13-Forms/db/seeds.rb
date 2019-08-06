Student.destroy_all

ryan = Student.create(name: "Ryan", age: 26)

mackenzie = Student.create(name: "Mackenzie", age: 22)

harry_potter = Student.create(name: "Harry", age: 12343)

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
  Student.create(name: student_name, age: rand(50))
end
