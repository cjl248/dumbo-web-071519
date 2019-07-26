class Hero < ActiveRecord::Base
  has_many :fights
  # def fights
  #   Fight.all.select do |fight|
  #     fight.hero_id == self.id
  #   end
  # end
  has_many :villains, through: :fights
  # def villain_ids
  #   fights.map do |fight|
  #     fight.villain_id
  #   end
  # end
  #
  # def villains
  #   villain_ids.map do |villain_id|
  #     Villain.find(villain_id)
  #   end
  # end

  def dancing
    "#{self.name} is dancing!"
  end
end
