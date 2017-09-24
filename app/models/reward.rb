class Reward < ApplicationRecord
  validates :project_id, :gift, presence: true
  validates :pledge_amount, numericality: { only_integer: true }

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: 'Project'

end
