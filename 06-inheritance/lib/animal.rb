class Animal
  attr_accessor :name, :emotion

  def initialize(name)
    @name = name
    @emotion = "nervous"
  end

  def eat(food)
    p "Nom nom, I am eating #{food}. 😋"
  end

  def sleep
    "zzz 😴"
  end

  def poop
    "💩"
  end
end
