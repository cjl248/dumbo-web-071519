class Student < ActiveRecord::Base
  has_many :projects
  
    def name_and_age
      " #{self.name} is #{self.age} old! Good for them"
    end

end
