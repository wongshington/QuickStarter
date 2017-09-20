# == Schema Information
#
# Table name: projects
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  author_id        :integer          not null
#  backer_count     :integer
#  funding_deadline :datetime         not null
#  funding_goal     :integer          not null
#  total_funded     :integer
#  blurb            :string
#  description      :text             not null
#  title_image      :string
#  extra_image      :string
#  category         :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Project < ApplicationRecord

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  has_many :rewards,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: 'Reward'

end
