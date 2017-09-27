class CreatePurchasedRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :purchased_rewards do |t|
      t.integer :project_id, null: false
      t.integer :reward_id, null: false

      t.timestamps
    end
  end
end
