require 'pry'

# clown_joke = "Why don't sharks eat clowns? They taste funny."
# clown_names = [ "Bluster", "Flaky", "Raspy", "Floppy", "Krusty", "Baby" ]

class Clown
  attr_reader :fear
  # attr_writer :name, :age, :skill, :fear, :height
  attr_accessor :name, :age, :skill, :height

  def initialize(name_arg, age_arg, skill_arg, fear_arg)
    @height = 60
    @fear = fear_arg
    @age = age_arg
    @skill = skill_arg
    @name = name_arg
  end
  # Behavior

  def dance
    "I am dancing 🤡"
  end

  def say_hi
    "Hi, I am #{self.name} and I'm terrified of #{@fear}."
  end

  def cure
    @fear = "nothing"
  end

end

clown1 = Clown.new("Bluster", 40, "juggling", "red noses")
clown1.cure
clown2 = Clown.new("Flaky", 32, "pie throwing", "children")
clown3 = Clown.new("Raspy", 24, "haunting your dreams","other clowns")
clown4 = Clown.new("Floppy", 76, "falling down","stairs")
clown5 = Clown.new("Krusty", 39, "giving a creepy smile","parties")
clown6 = Clown.new("Baby", 19, "eating a lot of food","birds")

clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]

older_clowns = clowns.select do |clown_object|
  clown_object.age > 25
end

# older_clowns = []
# clowns.each do |clown_object|
  # if clown_object.age > 25
    # older_clowns << clown_oject
  # end
# end

clown_names = clowns.map do |clown_obj|
  clown_obj.name
end

# clown_names = []
# clowns.each do |clown_object|
  # clown_names << clown_oject.name
# end























binding.pry

0
