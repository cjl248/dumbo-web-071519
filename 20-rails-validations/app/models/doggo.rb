class Doggo < ApplicationRecord
  has_many :doggo_spells, dependent: :destroy
  has_many :spells, through: :doggo_spells

  def string_name
    "#{self.name}!!!!"
  end
end
