class Api::SearchController < ApplicationController 
  def index
    @projects = Project.all.select do |project|
      project.title.downcase.include?(search_params[:keywords].downcase)
    end
    render 'api/projects/index'
  end

  private
  def search_params
    params.require(:search).permit(:keywords)
  end
end