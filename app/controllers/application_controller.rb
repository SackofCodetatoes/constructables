class ApplicationController < ActionController::Base
  # protect_from_forgery with :exception
  skip_before_action :verify_authenticity_token
  helper_method :logged_in?, :current_user

  def logout!
    session[:session_token] = nil
    @current_user.reset_session_token!
    @current_user = nil
  end

  def login(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logged_in?
    !!current_user
  end
  
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end


end
