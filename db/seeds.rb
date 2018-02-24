# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Project.destroy_all
# Reward.destroy_all

jesse = User.create(username: 'Jesse Wong', email: "jessewong@email.com", password: "123456", img_url: "http://res.cloudinary.com/quickstarter/image/upload/v1506308070/katrina_user_rmzxd2.jpg" )
user1 = User.create(username: "jesse_wong", email: "name@email.com", password:"123456", img_url: "http://res.cloudinary.com/quickstarter/image/upload/v1506308070/katrina_user_rmzxd2.jpg" )
user2 = User.create(username: 'guest', email: "email@email.com", password: 'password', img_url: "http://res.cloudinary.com/quickstarter/image/upload/v1506308158/user-avatar-placeholder_hdsliy.png")
user3 = User.create(username: 'Quick_Silver', email: "LookAround@email.com", password: 'secure', img_url: "http://res.cloudinary.com/quickstarter/image/upload/v1506308158/user-avatar-placeholder_hdsliy.png")

cat1 = Category.create(name: "Art")
cat2 = Category.create(name: "Food")
cat3 = Category.create(name: "Music")
cat4 = Category.create(name: "Technology")
cat5 = Category.create(name: "Fashion")
cat6 = Category.create(name: "Film & Video")


jesse_project = Project.create(title: "", author_id: jesse.id, funding_goal: 100000, funding_deadline: '2018-08-05', description: "Description about myself", category_id: cat1, title_image: "img" , backer_count: 0, total_funded: 1993 )
project1= Project.create(title: "Get Rich Quick", author_id: user1.id, funding_goal: 5410, funding_deadline: '2019-08-05', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312204/christian-joudrey-98245_gba6la.jpg", backer_count: 0, total_funded: 0 )
project2= Project.create(title: "Get Poor Slow", author_id: user1.id, funding_goal: 3410, funding_deadline: Date.new(2018, 1, 9), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312207/lily-lvnatikk-267356_mkeshi.jpg", backer_count: 0, total_funded: 0 )
project3= Project.create(title: "Title #3", author_id: user2.id, funding_goal: 2110, funding_deadline: Date.new(2018, 10, 12), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312200/octavio-fossatti-37556_zgdbn9.jpg", backer_count: 0, total_funded: 0  )
project4= Project.create(title: "Title #4", author_id: user1.id, funding_goal: 6010, funding_deadline: Date.new(2018, 8, 10), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312206/joshua-sortino-228788_kf4wyj.jpg", backer_count: 0, total_funded: 0  )
project5= Project.create(title: "Title #5", author_id: user3.id, funding_goal: 9010, funding_deadline: Date.new(2018, 10, 1), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312207/lily-lvnatikk-267356_mkeshi.jpg", backer_count: 0, total_funded: 0  )
project6= Project.create(title: "Title #6", author_id: user2.id, funding_goal: 3231, funding_deadline: Date.new(2018, 4, 4), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat3.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312201/andrea-cau-51160_nc4h1o.jpg", backer_count: 0, total_funded: 0 )
project7= Project.create(title: "Title #7", author_id: user3.id, funding_goal: 6230, funding_deadline: Date.new(2018, 6, 10), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat4.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312206/joshua-sortino-228788_kf4wyj.jpg", backer_count: 0, total_funded: 0 )
project8= Project.create(title: "Title #8", author_id: user2.id, funding_goal: 5230, funding_deadline: Date.new(2018, 5, 10), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat4.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312201/andrea-cau-51160_nc4h1o.jpg", backer_count: 0, total_funded: 0 )
project9= Project.create(title: "Title #9", author_id: user3.id, funding_goal: 8764, funding_deadline: Date.new(2018, 10, 3), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat6.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312200/octavio-fossatti-37556_zgdbn9.jpg", backer_count: 0, total_funded: 0 )
project10= Project.create(title: "Title #10", author_id: user3.id, funding_goal: 12345, funding_deadline: Date.new(2018, 2, 10), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312204/christian-joudrey-98245_gba6la.jpg", backer_count: 0, total_funded: 0 )


Reward.create(project_id: project1.id, pledge_amount: 50, gift: "a thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project1.id, pledge_amount: 150, gift: "a big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project1.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project2.id, pledge_amount: 50, gift: "a thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project2.id, pledge_amount: 150, gift: "a big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project2.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project3.id, pledge_amount: 50, gift: "a thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project3.id, pledge_amount: 150, gift: "a big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project3.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project4.id, pledge_amount: 50, gift: "a thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project4.id, pledge_amount: 150, gift: "a big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project4.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")











# RESUME PROJECT
# user17 = User.create(username: "Your Next Developer", email: "name@email.com", password:"123456", img_url: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1518325619/headshot_fyzldg.jpg" )
