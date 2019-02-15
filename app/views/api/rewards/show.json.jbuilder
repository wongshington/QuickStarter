json.extract! @reward, :id, :project_id, :gift, :pledge_amount,
                       :gift_description
if current_user
  json.paid_users reward.backers.pluck(:id).include?(current_user.id)
end
