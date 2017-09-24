require 'test_helper'

class Api::RewardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_rewards_index_url
    assert_response :success
  end

  test "should get create" do
    get api_rewards_create_url
    assert_response :success
  end

end
