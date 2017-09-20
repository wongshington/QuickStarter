class CreateUserRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :user_rewards do |t|
      t.integer :backer_id, null: false
      t.integer :reward_id, null: false

      t.timestamps
    end
  end
end
