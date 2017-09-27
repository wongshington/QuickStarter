class DropColumnBackedAmount < ActiveRecord::Migration[5.1]
  def change
    remove_column :supporters, :backed_amount
  end
end
