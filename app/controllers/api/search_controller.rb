class Api::SearchController < ApplicationController 
  def index
    @projects = Project.all.select do |project|
      project.title.downcase.include?(search_params[:keywords].downcase)
    end
    # debugger
    render "api/search/index"
    # render json: @projects
  end

  private
  def search_params
    params.require(:search).permit(:keywords)
  end
end