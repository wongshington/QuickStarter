# == Schema Information
#
# Table name: supporters
#
#  id            :integer          not null, primary key
#  backer_id     :integer
#  project_id    :integer
#  backed_amount :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class SupporterTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
