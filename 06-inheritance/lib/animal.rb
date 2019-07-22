class Animal
  attr_accessor :name, :emotion

  def initialize(name)
    @name = name
    @emotion = "nervous"
  end

  def eat(food)
    "Nom nom nom, I am eating #{food}! 😋"
  end

  def poop
    "🚽"
  end

  def reproduce
    "I am reproducing."
  end

  def die
    "Oh no. I am dead."
  end

  def walk
    "My feet hurt."
  end











end
