# == Schema Information
#
# Table name: projects
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
  validates :user_id, :title, :description, presence: true;

  belongs_to :user
  has_many :steps
  has_one_attached :photo
    # foreign_key: 'project_id',
    # classname: "Step"
  # has_many :comments 
end
