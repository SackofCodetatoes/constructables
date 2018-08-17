@projects.each do |project|
  json.projects do 
    json.set! project.id do 
      json.extract! project, :id, :title, :user_id, :description
    end
  end
  json.users do 
    json.set! project.user.id do 
      json.extract! project.user, :id, :username
    end
  end
end