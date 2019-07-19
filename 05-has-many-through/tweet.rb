class Tweet
  attr_reader :content, :author
  @@all = []

  def initialize(content, author)
    @content = content
    @author = author
    @@all << self
  end

  def self.all
    # self => Tweet
    @@all
  end

  def username
    self.author.username
  end

  def all_likes
    # Returns an array of Likes
    Like.all.select do |like|
      like.tweet == self
    end
  end

  def likers
    # Returns an array of Users
    self.all_likes.map do |like|
      like.user
    end
  end

  def liker_usernames
    self.likers.map { |user| user.username }
  end

end
