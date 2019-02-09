json.category do 
  json.extract! category, :id, :name
  json.project_count category.projects.length
end
json.projects do
  json.array! category.projects.each do |project|
    json.id project.id
    json.title project.title
    json.author project.author.username
    json.title_image project.title_image
    json.author_pic project.author.img_url
    json.days_left project.days_left
    json.funded_percentage project.funded_percentage
    json.backer_count project.backers.count
    json.category_name project.category.name
    json.category_id category.id
  end
end
