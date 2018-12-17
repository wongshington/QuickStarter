json.extract! user, :id, :username, :email
json.img_url url_for(user.photo)

json.reward_ids do
  json.array! user.purchased_rewards.map(&:reward_id)
end
