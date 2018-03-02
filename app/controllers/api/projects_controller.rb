class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
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

  private

  def project_params
    params.require(:project).permit(:title, :funding_deadline, :funding_goal, :description, :category_id, :total_funded, :title_image, :blurb)
  end
end
