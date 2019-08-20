class LoginController < ApplicationController

  def new
    # gets the form
  end

  def create
    # check the information inside the form
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      flash[:message] = "Logging in #{@user.name}"
      redirect_to colors_path
    else
      flash[:message] = "Incorrect username or password"
      redirect_to "/welcome"
    end
  end

end
