class DropMostTables < ActiveRecord::Migration[5.1]
  def change
  
    drop_table :supporters
    drop_table :user_rewards
  end
end
