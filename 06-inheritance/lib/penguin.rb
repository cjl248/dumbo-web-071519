class Penguin < Animal
  # include Fly
  # prepend Fly
  extend Fly

  def dance
    "I am dancing."
  end

  def wobble
    "Look at my feet."
  end

  def march
    "I am marching."
  end

end
