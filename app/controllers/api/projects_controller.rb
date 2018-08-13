class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render "api/projects/show"
    end
  end

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
  end

  def edit
  end

  def update
  end

  def destroy
    @project = Project.find(params[:id])
    if @project.destroy
      render :show
    end
  end
  private
    def project_params
      params.require('project'.permit(:title, :user_id, :description))
    end
end

