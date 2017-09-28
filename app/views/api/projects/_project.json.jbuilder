json.extract! project, :id, :description, :title, :author_id,
                       :funding_deadline,
                       :funding_goal, :total_funded, :blurb,
                       :title_image, :extra_image, :category_id
json.author project.author.username
json.author_pic project.author.img_url
json.days_left project.days_left
json.rewards project.rewards
json.funded_percentage project.funded_percentage
json.backer_count project.backers.count
json.category_name project.category.name



# if current_user.
