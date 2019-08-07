require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get '/' do
    erb :welcome
  end

  # INDEX
  get '/students' do
    # binding.pry
    if params[:search_name]
      # @students = Student.where("name like ?", "%#{params[:search_name]}%")
      @students = Student.where(name: params[:search_name])
    else
      @students = Student.all
    end
    erb :index
  end

  # NEW
  get '/students/new' do
    erb :new
  end

  # CREATE
  post '/students' do
    @student = Student.create(params[:student])
    redirect "/students/#{@student.id}"
    # erb :show
  end

  # SHOW
  get '/students/:id' do
     @student = Student.find(params[:id])
     @hello = "hello"
     # @student = Student.find_by(id: params[:id])
     erb :show
  end





















end
