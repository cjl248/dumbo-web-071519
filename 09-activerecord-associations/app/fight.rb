class Fight < ActiveRecord::Base
  belongs_to :hero
  belongs_to :villain
end
