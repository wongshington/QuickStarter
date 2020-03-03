class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def purchased_reward
    @user = User.find(params[:id])
    @user_reward = UserReward.new(backer_id: @user.id, reward_id: params[:reward][:id].to_i)
    # @user.rewards << UserReward.new(backer_id: @user.id, reward_id: params[:reward][:id].to_i)
    @user_reward.save
    @project = Project.find(params[:reward][:project_id])
    @project.update_funds
    # don't know if i need to manually call this here
    render "api/projects/show"
  end
  
  def show
    @user = User.first
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
