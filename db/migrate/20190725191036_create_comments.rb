class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null:false
      t.integer :project_id, null:false
      t.string :content
      t.integer :likes

      t.timestamps
    end
    add_index :comments, :project_id
    add_index :comments, :user_id
  end
end
