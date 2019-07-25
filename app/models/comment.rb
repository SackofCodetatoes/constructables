# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  project_id :integer          not null
#  content    :string           not null
#  likes      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  parent_id  :integer
#

class Comment < ApplicationRecord
  validates :user_id, :project_id, :content, presence: true;

  belongs_to :project
  belongs_to :user
end
