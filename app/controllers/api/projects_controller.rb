class Api::ProjectsController < ApplicationController
  def create
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
  end
  private
    def project_params
      params.require('project'.permit(:title, :user_id, :description))
    end
end

