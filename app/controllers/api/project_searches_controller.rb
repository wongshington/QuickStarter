class Api::ProjectSearchesController < ApplicationController

  def index
    param = '%' + params[:input].downcase + '%'
    @projects = Project.where('lower(title) LIKE ?', param).to_a

    if @projects.empty?
      render json: ["No Results Found :("], status: 404
    else
      render :index
    end

  end


end
