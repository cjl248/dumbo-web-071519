require_relative "../config/environment"

class Clown
  attr_reader :name, :age, :fear, :skill

  def initialize(name, age, fear, skill)
    @name = name
    @age = age
    @fear = fear
    @skill = skill
  end

end

clown1 = Clown.new("Bilbo", 10, "Spiders", "Juggling")

binding.pry
0
