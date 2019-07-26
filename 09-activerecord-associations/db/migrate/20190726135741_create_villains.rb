class CreateVillains < ActiveRecord::Migration[5.2]
  def change

    create_table :villains do |t|
      t.string :name
      t.string :identity
      t.integer :age
    end

  end
end
