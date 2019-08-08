class CreateProjects < ActiveRecord::Migration
  def change

    create_table :projects do |t|
      t.integer :student_id
      t.string :name
      t.integer :wow_factor
    end
    
  end
end
