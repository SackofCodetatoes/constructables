class Api::StepsController < ApplicationController
  def create
    @step = Step.new(step_params)

    if @step.save
      project = @step.project
      render json: 'MISSON COMPLETE'
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find(params[:id])
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
      params.require(:step).permit(:title, :body, :project_id, :step_index, :id)
    end
end
