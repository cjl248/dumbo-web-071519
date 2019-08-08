class CreateDoggos < ActiveRecord::Migration[5.2]
  def change
    create_table :doggos do |t|
      t.string :name
      t.string :house
      t.string :wand_core

      t.timestamps
    end
  end
end
