class Project < ApplicationRecord
validates :title, :author_id, :funding_goal, :funding_deadline, :description, :total_funded, :category, presence: true

belongs_to :author,
primary_key: :id,
foreign_key: :author_id,
class_name: 'User'

has_many :rewards,
primary_key: :id,
foreign_key: :project_id,
class_name: 'Reward'

          has_many :supporters,
          primary_key: :id,
          foreign_key: :project_id,
          class_name: 'Supporter'
# maybe don't need
          has_many :backers,
          through: :supporters,
          source: :supporter

has_many :selected_rewards,
primary_key: :id,
foreign_key: :project_id,
class_name: 'PurchasedReward'

has_many :purchased_rewards,
through: :selected_rewards,
source: :reward

#  dis be right or nah?
#



def self.searched?
  self.where("category = ?")
end

def update_funds
  result = 0
  purchased_rewards.each do |reward|
    result += reward.pledge_amount
  end
  self.total_funded = result
  total_funded
  self.save
end

def days_left
  (funding_deadline-Date.today).to_i
end

def funded_percentage
  return "0" if total_funded == 0

  result = ((total_funded/(funding_goal * 1.0)) * 100)
  return "100" if result > 100
  return result.to_s
end


end
