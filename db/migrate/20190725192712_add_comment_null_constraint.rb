class AddCommentNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :comments, :content, false
    change_column_null :comments, :likes, false

  end
end
