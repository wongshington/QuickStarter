class Api::RewardsController < ApplicationController
  def index
    debugger
    @rewards = Reward.where(project_id: params[:project_id])
    render :index
  end

  def show
    @reward = Reward.find(params[:id])
  end

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
     @project = Project.find(params[:reward][:project_id])
    render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  private

  def reward_params
    params.require(:reward).permit(:project_id, :gift, :pledge_amount, :gift_description)
  end

end
