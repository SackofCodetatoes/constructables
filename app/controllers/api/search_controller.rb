class Api::SearchController < ApplicationController 
  def index
    @projects = Project.all.select do |project|
      words = search_params[:keywords].split(' ')
      # project.title.downcase.include?(search_params[:keywords].downcase)
      !(project.title.downcase.split(' ') & words).empty?
    end
    render 'api/projects/index'
  end

  private
  def search_params
    params.require(:search).permit(:keywords)
  end
end