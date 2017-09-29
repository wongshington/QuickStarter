json.extract! project, :id, :description, :title, :author_id,
                       :funding_deadline,
                       :funding_goal, :total_funded, :blurb,
                       :title_image, :extra_image, :category_id
json.author project.author.username
json.author_pic project.author.img_url
json.days_left project.days_left
json.rewards do
  json.array! project.rewards.each do |reward|
    json.extract! reward, :gift, :gift_description, :id, :pledge_amount, :project_id
    json.paid_users reward.backers.pluck(:id).include?(current_user.id)
    end
  end

json.funded_percentage project.funded_percentage
json.backer_count project.backers.count
json.category_name project.category.name




# if current_user.
