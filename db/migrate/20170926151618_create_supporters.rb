class CreateSupporters < ActiveRecord::Migration[5.1]
  def change
    create_table :supporters do |t|
      t.integer :supporter_id, null: false
      t.integer :project_id, null: false
      t.integer :backed_amount, null: false

      t.timestamps
    end
  end
end
