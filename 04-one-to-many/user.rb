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

end
