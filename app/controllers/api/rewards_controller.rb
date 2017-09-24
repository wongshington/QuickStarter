class Api::RewardsController < ApplicationController
  def index
    @rewards = Reward.all
    render :index
  end

  def create
    @reward = Reward.new(reward_params)
    @reward.project_id = params[:project_id]
    if @reward.save
    else
      render json: @reward.errors.messages, status: 404
    end
  end

  private

  def reward_params
    params.require(:reward).permit(:project_id, :gift, :pledge_amount)
  end

end
