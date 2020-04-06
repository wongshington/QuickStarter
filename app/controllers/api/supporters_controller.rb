class Api::SupportersController < ApplicationController
 
  def create
    @support = Supporter.new(supporter_params)
    if @support.save
      @project = Project.includes(
        :author,
        :category,
        :backers,
        :supporters,
        rewards: [:backers]
      ).find(@support.project_id)
      render 'api/projects/show'
    else
      # render some errors boi
    end
  end

  private

  def supporter_params
    params.require(:support).permit(:project_id, :supporter_id, :backed_amount)
  end
end
