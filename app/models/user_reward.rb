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

class UserReward < ApplicationRecord

belongs_to :rewardee,
primary_key: :id,
foreign_key: :backer_id,
class_name: 'User'

belongs_to :project,
primary_key: :id,
foreign_key: :project_id,
class_name: 'Project'



end
