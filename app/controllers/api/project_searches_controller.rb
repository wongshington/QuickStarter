class Api::ProjectSearchesController < ApplicationController

  def index
    param = '%' + params[:input].downcase + '%'
    @projects = Project.where('lower(title) LIKE ?', param).to_a
    render :index
  end


end
