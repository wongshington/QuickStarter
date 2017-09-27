json.extract! project, :id, :description, :title, :author_id,
                       :backer_count, :funding_deadline,
                       :funding_goal, :total_funded, :blurb,
                       :title_image, :extra_image, :category
json.author project.author.username
json.author_pic project.author.img_url
json.days_left project.days_left
json.rewards project.rewards
json.funded_percentage project.funded_percentage




# if current_user.
