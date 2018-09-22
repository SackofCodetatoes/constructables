class Api::StepsController < ApplicationController
  def create
    @step = Step.new(step_params)
    # title: step_params.title, body: step_params.body, project_id: step_params.project_id, step_index: step_params.project_id
    if @step.save
      project = @step.project
      render json: project
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def show
    @step = Step.find(params[:id])
    render 'show.html.erb'
  end

  def update
    debugger
    @step = Step.find(params[:step][:id])
    if @step.update(step_params)
      render json: 'GoodWork'
    else 
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private 
    def step_params
      params.require(:step).permit(:title, :body, :project_id, :step_index, :id, :photo)
    end
end
