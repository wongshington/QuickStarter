@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :days_left
    json.title_image url_for(project.photo)
    json.author project.author.username
    json.funded_percentage project.funded_percentage
  end
end
