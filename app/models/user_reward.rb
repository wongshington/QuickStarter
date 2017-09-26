class UserReward < ApplicationRecord
  validates :backer_id, :reward_id, presence: true

  belongs_to :backer,
  primary_key: :id,
  foreign_key: :backer_id,
  class_name: 'User'

  belongs_to :reward,
  primary_key: :id,
  foreign_key: :reward_id,
  class_name: 'Reward'
end
