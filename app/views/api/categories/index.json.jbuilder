@categories.each do |category|
  json.set! category.id do
    # json.partial! 'category', category: category
    # json.category do
    json.extract! category, :id, :name
    json.project_count category.projects.length
  end
end
