class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :backer_count
      t.datetime :funding_deadline, null: false
      t.integer :funding_goal, null: false
      t.integer :total_funded
      t.string :blurb
      t.text :description, null: false
      t.string :title_image
      t.string :extra_image
      t.string :category, null: false

      t.timestamps
    end
    add_index :projects, :author_id
    add_index :projects, :category
  end
end
