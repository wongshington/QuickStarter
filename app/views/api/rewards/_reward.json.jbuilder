json.extract! reward, :id, :project_id, :gift, :pledge_amount,
                       :gift_description
json.deliveryDate reward.project.funding_deadline.strftime("%B %Y")
json.gift_description reward.gift_description.capitalize
json.backers reward.backers.length