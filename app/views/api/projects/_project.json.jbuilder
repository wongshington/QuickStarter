json.project do
  json.extract! project, :id, :description, :title, :author_id,
                        :funding_deadline,
                        :funding_goal, :total_funded, :blurb,
                        :extra_image, :category_id #, :title_image
  json.author project.author.username
  json.author_pic url_for(project.author.photo)
  json.days_left project.days_left
  json.title_image url_for(project.photo)

  json.funded_percentage project.funded_percentage
  json.backer_count project.backers.length
  #=> .count will trigger a group by query
  json.category_name project.category.name
end

json.rewards do
  project.rewards.each do |reward|
  json.set! reward.id do
    json.extract! reward, :id, :pledge_amount, :gift, :gift_description
      if current_user
        json.paid_users reward.backers.pluck(:id).include?(current_user.id)
      end
    end
  end
end
