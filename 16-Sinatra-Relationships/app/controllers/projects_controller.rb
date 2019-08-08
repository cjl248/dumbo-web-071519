class ProjectsController < ApplicationController

  get "/projects/new" do
    @students = Student.all
    erb :"projects/new"
  end

  post "/projects" do
    binding.pry
    @project = Project.create(params[:project])
    redirect "/students/#{@project.student_id}"
    # redirect "/students/#{@project.student.id}"
    # redirect "/students/#{params[:project][:student_id]}"
  end

end
