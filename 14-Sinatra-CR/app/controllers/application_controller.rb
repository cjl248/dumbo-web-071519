require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get '/' do
    erb :welcome
  end

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

  get '/students/:id' do
     @student = Student.find(params[:id])
     # @student = Student.find_by(id: params[:id])
     erb :show
  end





















end
