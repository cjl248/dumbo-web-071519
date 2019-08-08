require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
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
  end

  # SHOW
  get '/students/:id' do
     find_student
     erb :show
  end

  # EDIT
  get '/students/:id/edit' do
    find_student
    erb :edit
  end

  # UPDATE
  patch "/students/:id" do
    find_student
    @student.update(params[:student])
    redirect "/students/#{@student.id}"
  end

  # DESTROY
  delete "/students/:id" do
    find_student
    @student.destroy
    redirect "/students"
  end

  patch "/students/:id/increase" do
    find_student
    @student.update(age: @student.age + 1)
    redirect "/students/#{@student.id}"
  end


  def find_student
    @student = Student.find(params[:id])
  end













end
