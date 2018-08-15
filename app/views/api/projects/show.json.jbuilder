json.project do 
  json.partial! "api/projects/project", project: @project
end
json.user do 
  json.extract! @project.user, :id, :username
end
json.steps do 
  @project.steps do |step|
    json.set! step.id do 
      json.extract! step, :title, :body, :step_index
    end
  end
end

