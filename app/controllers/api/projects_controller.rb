class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all.limit(4)
    render :index
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end
 
  def show
    if params[:id] == "-1"
      @project = Project.random_project
      return @project
    else
      @project = Project.includes(
        :author,
        :category,
        :backers,
        :supporters,
        rewards: [:backers]
      ).find(params[:id])
    end
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

  private

  def project_params
    params.require(:project).permit(:title, :funding_deadline, :funding_goal, :description, :category_id, :total_funded, :title_image, :blurb, :photo)
  end
end
