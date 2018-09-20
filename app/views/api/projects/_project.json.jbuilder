# json.extract! project, :id, :title, :user_id, :description
# json.project do
  json.id project.id
  json.title project.title
  json.user_id project.user_id
  json.description project.description
  json.image project.photo.attached? ? url_for(project.photo) : ''
# end