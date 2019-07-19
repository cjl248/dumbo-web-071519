require 'pry'
# environment & application setup
# requiring relative and necessary files to make our app communicate
require "./user"
require "./tweet"

coffee_dad = User.new("coffee_dad")
kanye = User.new("ye")

cd1 = Tweet.new("getting a# cofeffevsz", coffee_dad)
cd2 = Tweet.new("need a cup of @joe", coffee_dad)
cd3 = Tweet.new("#hashtag", coffee_dad)
cd4 = Tweet.new("The wife just got tea. #divorce", coffee_dad)

k1 = Tweet.new("I miss the old Kanye", kanye)
k2 = Tweet.new("McDonald's is my favorite restaurant", kanye)
k3 = Tweet.new("North West", kanye)
kanye.post_tweet("New album dropping")
coffee_dad.post_tweet("As I stare into the abyss, it stares back and I long for death.")


binding.pry
puts 'done'
