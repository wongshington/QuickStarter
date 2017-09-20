class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.integer :pledge_amount, null: false
      t.string :gift, null: false
      t.string :gift_description

      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
