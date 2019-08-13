class CreateDoggoSpells < ActiveRecord::Migration[5.2]
  def change
    create_table :doggo_spells do |t|
      t.string :location
      t.belongs_to :doggo, foreign_key: true
      # t.integer :doggo_id

      t.references :spell, foreign_key: true

      t.timestamps
    end
  end
end
