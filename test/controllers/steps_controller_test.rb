require 'test_helper'

class StepsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get steps_create_url
    assert_response :success
  end

  test "should get destroy" do
    get steps_destroy_url
    assert_response :success
  end

end
