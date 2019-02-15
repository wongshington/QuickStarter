class Api::ProjectSearchesController < ApplicationController

  def index
    param = '%' + params[:input].downcase + '%'
    @projects = Project.where('lower(title) LIKE ?', param).to_a
    if !(('a'..'z').to_a.include?((params[:input])[0]))
      render json: ["Must Enter Valid Search Statement"], status: 401
    elsif @projects.empty?
      render json: ["No Results Found :("], status: 404
    else
      render :index
    end

  end


end
