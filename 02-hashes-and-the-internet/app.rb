require 'pry'
require 'rest-client'
require 'json'

# 1. Get an input from a user

def welcome
  system "clear"
  puts "Welcome to the Book Club! 📕"
end

def get_input_from_user
  puts "Hope you're having a great day."
  puts "What would you like to search for?"
  input = gets.strip
  return input
end

# 2. Feed the input to the API (Google Books)

def hit_the_google_books_API(input_that_the_user_typed)
  formatted_query = input_that_the_user_typed.split(" ").join("+")
  # We take the input that the user typed, split it where the spaces are, and join it with a plus

  url = "https://www.googleapis.com/books/v1/volumes?q=#{formatted_query}"
  response = RestClient.get(url)
  return JSON.parse(response.body)
end

# 3. Return that input for the user

def return_book_titles(array_of_books)
  array_of_books.map do |book|
    book["volumeInfo"]["title"]
  end
end

def print_books_and_get_one_title(titles)
  system 'clear'

  puts "Here are all your books:"
  puts "🤓" * 10

  titles.each do |title|
    puts title
  end

  puts "Please write the title of the book you want to see more information about!"
  gets.strip
end

def get_all_books_with_that_title(array_of_books, title)
  array_of_books.select do |book|
    book["volumeInfo"]["title"] == title
  end
end

def print_all_the_chosen_books(books_array)
  system 'clear'
  if books_array.length > 0

    puts "Here's the Information!"
    books_array.each do |book|
      puts "Title:" +  book["volumeInfo"]["title"]
      if book["volumeInfo"]["authors"]
        puts "Author:" + book["volumeInfo"]["authors"].join(" & ")
      end
      puts "Description:" + book["volumeInfo"]["description"]
      puts "*" * 25
    end

  else

    puts "Hmm, there doesn't seem to be a book with that title. 🤔"

  end
end

welcome()
input = get_input_from_user()
response_hash = hit_the_google_books_API(input)
book_titles = return_book_titles(response_hash["items"])
one_title = print_books_and_get_one_title(book_titles)
chosen_books = get_all_books_with_that_title(response_hash["items"], one_title)
print_all_the_chosen_books(chosen_books)

# binding.pry
puts "Done!"
