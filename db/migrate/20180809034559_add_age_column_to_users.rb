class AddAgeColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :age, :string, null: false
  end
end
