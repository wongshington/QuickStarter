class Category < ApplicationRecord
  validates :name, presence: true

  has_many :projects,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: 'Project'
end
