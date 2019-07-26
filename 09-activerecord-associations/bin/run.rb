require_relative "../config/environment"

puts "Welcome to the Hero App"

puts "What is your superhero name?"
name = gets.chomp

puts "What is your identity name?"
identity = gets.chomp

puts "What is your age?"
age = gets.chomp.to_i

hero = Hero.create(name: name, identity: identity, age: age, weight: rand(100))

puts "Your hero's weight is #{hero.weight}"
