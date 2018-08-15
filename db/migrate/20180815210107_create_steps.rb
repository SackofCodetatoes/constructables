class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.integer :project_id, null:false
      t.string :title, null: false
      t.string :body, null: false
      t.integer :step_index, null:false

      t.timestamps
    end
    add_index :steps, :project_id
  end
end
