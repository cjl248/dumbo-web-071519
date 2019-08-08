class DoggosController < ApplicationController

  def index
    @doggos = Doggo.all
    # render :index
  end

  def show
    @doggo = Doggo.find(params[:id])
  end

end
