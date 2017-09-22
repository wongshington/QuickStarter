# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "jesse_wong", email: "name@email.com", password:"123456")
User.create(username: 'guest', email: "email@email.com", password: 'password')
User.create(username: 'Quick_Silver', email: "LookAround@email.com", password: 'secure')


Project.create(title: "Get Rich Quick", author_id: 1, funding_goal: 333, funding_deadline: '1993-08-05', description: "description", category: "Food", title_image: "https://unsplash.com/?photo=uSFOwYo1qEw", backer_count: 17 )
Project.create(title: "Get Poor Slow", author_id: 1, funding_goal: 333, funding_deadline: Date.new(2015, 10, 10), description: "description", category: "Food", title_image: "https://unsplash.com/?photo=uSFOwYo1qEw", backer_count: 171 )
