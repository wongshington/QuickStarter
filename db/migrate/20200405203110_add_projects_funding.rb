class AddProjectsFunding < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :supporter_funding, :integer, :default => 0
    add_column :supporters, :backed_amount, :integer, null: false
  end
end
