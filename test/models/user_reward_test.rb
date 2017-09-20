# == Schema Information
#
# Table name: user_rewards
#
#  id         :integer          not null, primary key
#  backer_id  :integer          not null
#  reward_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class UserRewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
