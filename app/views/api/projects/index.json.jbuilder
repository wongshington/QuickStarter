@projects.includes(
  :author,
  :category,
  :backers,
  rewards: [:backers]
  ).each do |project|
    json.set! project.id do
      json.partial! 'project', project: project
    end
end
