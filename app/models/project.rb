class Project < ApplicationRecord
validates :title, :author_id, :funding_goal, :funding_deadline, :description, :category, presence: true

belongs_to :author,
primary_key: :id,
foreign_key: :author_id,
class_name: 'User'

has_many :rewards,
primary_key: :id,
foreign_key: :project_id,
class_name: 'Reward'

def self.searched?
  self.where("category = ?")
end


def days_left
  (funding_deadline-Date.today).to_i
end

def funded_percentage(total_funded, funding_goal)
  total_funded/(funding_goal * 1.0)
end


end
