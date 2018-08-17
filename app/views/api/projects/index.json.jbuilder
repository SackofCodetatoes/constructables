@projects.each do |project|
  json.projects do 
    json.set! project.id do 
      json.partial! 'api/projects/project', project: project
    end
  end
  json.users do 
    json.set! project.user.id do 
      json.extract! project.user, :id, :username
    end
  end
end