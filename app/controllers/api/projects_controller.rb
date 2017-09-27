class Api::ProjectsController < ApplicationController
  def index
    if params[:category]
      @projects = projects.where(params[:category] = project.category)
    else
      @projects = Project.all
    end
    render :index
  end

  def create
    @project = Project.new(project_params)
    @project.days_left = self.days_left
    @project.author_id = current_user.id
    @project.total
    if @project.save
      render :show
    end
  end

  def new
    render :new
  end

  def show
    @project = Project.find(params[:id])
  end

  def update
  @project = Project.find(params[:id])

    if @project.update_attributes(project_params)
      @project.update_funds
      render :show
    else
      render @project.errors.full_messages
    end
  end

  def purchased_reward
    @project = Project.find(params[:reward][:project_id])
    new_rew = PurchasedReward.new(project_id: @project.id, reward_id:(params[:reward][:id].to_i))
    new_rew.save
  
    @project.update_funds
    render :show
  end

  private

  def project_params
    params.require(:project).permit(:title, :funding_deadline, :funding_goal, :description, :category, :total_funded)
  end
end
