json.project do
json.extract! project, :id, :description, :title, :author_id,
                       :funding_deadline,
                       :funding_goal, :total_funded, :blurb,
                       :title_image, :extra_image, :category_id
json.author project.author.username
json.author_pic project.author.img_url
json.days_left project.days_left
# json.rewards do
#   json.array! project.rewards.each do |reward|
#     json.extract! reward, :id
#     if current_user
#       json.paid_users reward.backers.pluck(:id).include?(current_user.id)
#     end
#     end
#   end


json.funded_percentage project.funded_percentage
json.backer_count project.backers.length
# .count will trigger a group by query
json.category_name project.category.name
end

json.rewards do
  json.array! project.rewards.each do |reward|
    json.extract! reward, :id
    if current_user
      json.paid_users reward.backers.pluck(:id).include?(current_user.id)
    end
    end
  end
