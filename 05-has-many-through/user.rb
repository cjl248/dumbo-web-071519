class User
  attr_reader :username
  # attr_writer :username

  def initialize(username)
    @username = username
    @hair_color = "black"
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.author == self
    end
  end

  def post_tweet(content)
    Tweet.new(content, self)
  end

  def like_tweet(tweet)
    # binding.pry
    Like.new(self, tweet)
  end

  def all_likes
    # Returns an array of Likes
    Like.all.select do |like|
      like.user == self
    end
  end

  def liked_tweets
    # Returns an array of Tweets
    self.all_likes.map { |like| like.tweet }
  end

  def number_of_likes
    self.all_likes.count
    # likes_array = self.all_likes.map { |like| like.tweet }
    # likes_array.count
  end

  def liked_tweets_contents
    self.liked_tweets.map { |tweet| tweet.content }
  end

end
