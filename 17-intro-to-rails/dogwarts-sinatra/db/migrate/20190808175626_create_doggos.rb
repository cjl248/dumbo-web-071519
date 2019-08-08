class CreateDoggos < ActiveRecord::Migration
  def change
    create_table :doggos do |t|
      t.string :name
      t.string :house
      t.string :wand_core
    end
  end
end
