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


def self.days_left(funding_deadline)

end

def self.funded_percentage(total_funded, funding_goal)
  total_funded/(funding_goal * 1.0)
end


end
