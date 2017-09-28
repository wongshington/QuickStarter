class RemoveCategoryFromProjects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :category, :string
  end
end
