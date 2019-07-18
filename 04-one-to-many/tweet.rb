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

end
