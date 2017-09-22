# == Schema Information
#
# Table name: supporters
#
#  id            :integer          not null, primary key
#  backer_id     :integer
#  project_id    :integer
#  backed_amount :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Supporter < ApplicationRecord

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: 'Project'

  belongs_to :user,
  primary_key: :id,
  foreign_key: :backer_id
end
