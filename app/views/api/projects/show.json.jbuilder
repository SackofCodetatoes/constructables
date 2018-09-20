json.project do 
  json.partial! "api/projects/project", project: @project
end
json.user do 
  json.extract! @project.user, :id, :username
end
json.steps do 
  @project.steps.each do |step|
    json.set! step.step_index do
      json.id step.id 
      json.title step.title
      json.body step.body
      json.step_index step.step_index
      json.project_id step.project_id
      json.image step.photo.attached? ? url_for(step.photo) : ''
    end
  end
end

