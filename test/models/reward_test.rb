# == Schema Information
#
# Table name: rewards
#
#  id               :integer          not null, primary key
#  project_id       :integer          not null
#  pledge_amount    :integer          not null
#  gift             :string           not null
#  gift_description :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
