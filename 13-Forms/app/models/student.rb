class Student < ActiveRecord::Base

    def name_and_age 
      " #{self.name} is #{self.age} old! Good for them"
    end 
   
end