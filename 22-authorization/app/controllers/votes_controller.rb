class VotesController < ApplicationController
  before_action :authorized, only: [:index, :create]
  
  def index
    @votes = @current_user.votes
    # @votes = Vote.all
  end

  def create
    if @can_vote
      Vote.create(color_id: params[:color_id], user_id: @user_id)
      # @current_user.votes.create(color_id: params[:color_id])
    end

    redirect_to colors_path
  end

end
