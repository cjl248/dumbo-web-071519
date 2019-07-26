class Hero < ActiveRecord::Base
  def dancing
    "#{self.name} is dancing!"
  end
end
