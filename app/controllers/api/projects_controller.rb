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

  private

  def project_params
    params.require(:project).permit(:title, :funding_deadline, :funding_goal, :description, :category)
  end
end
