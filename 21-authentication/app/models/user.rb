class User < ApplicationRecord
  has_secure_password
  has_many :votes
  has_many :colors, through: :votes
  validates :username, uniqueness: true
  # we can use "password" to create/update Users
  # we can use "authenticate" to authenticate users (check their password)
end
