class Spell < ApplicationRecord
  has_many :doggo_spells, dependent: :destroy
  has_many :doggos, through: :doggo_spells

  validates :incantation, :description, presence: true, uniqueness: true
  validates :intensity, presence: true

  validates :intensity, numericality: {greater_than: 0}
  validate :please_dont_say_he_who_must_not_be_named

  def please_dont_say_he_who_must_not_be_named
    if self.incantation.downcase.include?("voldemort")
      self.errors.add(:incantation, "must not include Lord Voldy.")
    end
  end


  # validates :incantation
end
