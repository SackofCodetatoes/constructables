class Api::UsersController < ApplicationController
  def new 
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    render json: {}
  end

  def update
  end

  def edit
  end

  private 
  def user_params
    params.require(:user).permit(:username, :password, :email, :age)
    # add fname and lname
  end
end 