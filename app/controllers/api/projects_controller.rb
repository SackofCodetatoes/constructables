class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render "api/projects/show"
    else 
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def search
    @projects = Project.all
    render json: 'specifics?'
  end

  def update
    @project = Project.find(params[:project][:id])
    # debugger
    if @project.update(project_params)
      render :show
    else 
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    if @project.destroy
      render :show
    end
  end
  private
    def project_params
      params.require('project').permit(:title, :user_id, :description, :photo)
    end
end

