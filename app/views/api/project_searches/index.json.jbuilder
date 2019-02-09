
@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :days_left, :title_image 
    json.author project.author.username
    json.funded_percentage project.funded_percentage

  end
end
