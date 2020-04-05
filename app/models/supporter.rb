class Supporter < ApplicationRecord
  validates :supporter_id, :project_id, :backed_amount, presence: true
  after_save :add_support

  belongs_to :supporter,
  primary_key: :id,
  foreign_key: :supporter_id,
  class_name: 'User'

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: 'Project'

  def add_support
    self.project.supporter_funding += self.backed_amount
    self.project.update_funds
  end
end
