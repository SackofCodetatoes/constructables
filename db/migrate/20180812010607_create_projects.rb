class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :user_id, null:false
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :projects, :user_id
  end
end
