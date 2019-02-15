@rewards.each do |reward|
  json.set! reward.id do
    json.partial! 'reward', reward: reward
    if current_user
      json.paid_users reward.backers.pluck(:id).include?(current_user.id)
    end
  end
end
