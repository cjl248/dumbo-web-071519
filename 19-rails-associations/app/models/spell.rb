class Spell < ApplicationRecord
  has_many :doggo_spells
  has_many :doggos, through: :doggo_spells
end
