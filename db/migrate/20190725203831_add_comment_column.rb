class AddCommentColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :parent_id, :integer
  end
end
