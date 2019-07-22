class Aardvark < Mammal

  def initialize(name)
    super(name)
    @emotion = "rage"
  end

  def eat_ants
    "I am eating ants!"
  end

  def poop
    super() * 10
  end

end
