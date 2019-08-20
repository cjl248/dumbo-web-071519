# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



30.times do |num|
  chunks = ["FF", "00"]
  chunks << sprintf("%02X", rand(0...255))
  Color.create(hex: chunks.shuffle.join(""))
end

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

















#
