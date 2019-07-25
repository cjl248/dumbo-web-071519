require_relative "../config/environment"

class Clown
  attr_accessor :name, :age, :fear, :skill
  # {name: "Bilbo", age: 10, fear: "Spiders", skill: "Juggling spiders"}
  def initialize(attributes_hash)

    attributes_hash.each do |key, value|
      self.send("#{key}=", value)
    end

  end

end

clown1 = Clown.new({name: "Bilbo", age: 10, fear: "Spiders", skill: "Juggling spiders"})
# clown1 = Clown.new("Bilbo", 10, "Spiders", "Juggling")

binding.pry
0
