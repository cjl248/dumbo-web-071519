class CreateSpells < ActiveRecord::Migration[5.2]
  def change
    create_table :spells do |t|
      t.string :description
      t.string :incantation
      t.integer :intensity

      t.timestamps
    end
  end
end
