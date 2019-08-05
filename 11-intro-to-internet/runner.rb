require 'sinatra'

get '/' do
  "<h1>Hello, welcome to chili's!!! 🌶</h1><p>Can I get you started with drinks?</p>"
end

get '/students' do
  "<h1>Hello, welcome to chili's!!! 🌶</h1><p>Here is a list of our students!</p>"
end

delete '/students' do
  "Oh no, I am being deleted."
end

get '/chicken' do
  "Hello World"
end
