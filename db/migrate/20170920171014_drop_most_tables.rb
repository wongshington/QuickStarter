class DropMostTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :projects
    drop_table :rewards
    drop_table :supporters
    drop_table :user_rewards
  end
end
