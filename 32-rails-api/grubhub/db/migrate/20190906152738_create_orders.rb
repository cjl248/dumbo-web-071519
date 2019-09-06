class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :item_name
      t.datetime :placed_time
      t.datetime :delivery_time
      t.integer :price

      t.timestamps
    end
  end
end
