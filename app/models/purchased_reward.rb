class PurchasedReward < ApplicationRecord
  validates :project_id, :reward_id, presence: true


  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: 'Project'

  belongs_to :reward,
  primary_key: :id,
  foreign_key: :reward_id,
  class_name: 'Reward'


end
