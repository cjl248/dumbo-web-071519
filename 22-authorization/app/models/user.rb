class User < ApplicationRecord
  has_secure_password
  has_many :votes
  has_many :colors, through: :votes
  validates :username, uniqueness: true

  def number_of_votes_remaining
    10 - self.votes.count
  end

  def can_vote
    number_of_votes_remaining > 0
  end
  # we can use "password" to create/update Users
  # we can use "authenticate" to authenticate users (check their password)
end
