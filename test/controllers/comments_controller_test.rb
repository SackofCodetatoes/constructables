require 'test_helper'

class CommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get :show" do
    get comments_:show_url
    assert_response :success
  end

  test "should get :create" do
    get comments_:create_url
    assert_response :success
  end

end
