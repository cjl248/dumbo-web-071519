require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    "<chicken>Hello, welcome to chili's!!! 🌶</chicken>
    <p>Can I get you started with drinks?</p>"
    erb :welcome
  end

  get "/students" do
    "<h1>Hello, welcome to chili's!!! 🌶</h1><p>Here is a list of our students!</p>"
  end

end
