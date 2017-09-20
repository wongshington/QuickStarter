class CreateSupporters < ActiveRecord::Migration[5.1]
  def change
    create_table :supporters do |t|
      t.integer :backer_id
      t.integer :project_id
      t.integer :backed_amount

      t.timestamps
    end
    add_index :supporters, :backer_id
    add_index :supporters, :project_id
  end
end
