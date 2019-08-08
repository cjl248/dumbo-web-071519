require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/doggos" do
    @doggos = Doggo.all
    erb :index
  end

  get "/doggos/new" do
    erb :new
  end

  post "/doggos" do
    @doggo = Doggo.create(params[:doggo])
    redirect "/doggos/#{@doggo.id}"
  end

  get "/doggos/:id" do
    @doggo = Doggo.find(params[:id])
    erb :show
  end

  get "/doggos/:id/edit" do
    @doggo = Doggo.find(params[:id])
    erb :edit
  end
end
