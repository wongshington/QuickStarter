json.extract! user, :id, :username, :email, :img_url

json.reward_ids do
  json.array! user.purchased_rewards.map(&:reward_id)
end
