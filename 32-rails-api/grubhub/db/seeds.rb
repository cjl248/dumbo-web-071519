# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Order.create(item_name: "Burrito", placed_time: DateTime.now - 1.hour, delivery_time: DateTime.now - 15.minutes, price: 1000)
Order.create(item_name: "Truffle Mac & Cheese", placed_time: DateTime.now - 12.hours, delivery_time: DateTime.now - 11.hours, price: 1500)
Order.create(item_name: "Horchata", placed_time: DateTime.now - 22.hours, delivery_time: DateTime.now - 21.hours, price: 400)