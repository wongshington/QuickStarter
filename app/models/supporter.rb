class Supporter < ApplicationRecord
  validates :supporter_id, :project_id, :backed_amount, presence: true

  belongs_to :supporter,
  primary_key: :id,
  foreign_key: :supporter_id,
  class_name: 'User'

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: 'Project'
end
