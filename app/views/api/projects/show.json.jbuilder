json.project do 
  json.partial! "api/projects/project", project: @project
end
json.user do 
  json.extract! @project.user, :id, :username
end

