class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    # user_id, project_id, content, parent_id
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else 
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
  end

  def update
    @comment = Comment.find(params[:id])

    if(@comment.update(comment_params))
      render :show
    else
      render json: ["Comment does not exist"], status: 404
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    render :show
  end

  private 
  def comment_params
    params.require(:comment).permit(:content, :user_id, :project_id, :id)
  end

end
