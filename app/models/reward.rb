# == Schema Information
#
# Table name: rewards
#
#  id               :integer          not null, primary key
#  project_id       :integer          not null
#  pledge_amount    :integer          not null
#  gift             :string           not null
#  gift_description :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Reward < ApplicationRecord

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: 'Project'

end
