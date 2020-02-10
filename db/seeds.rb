# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Project.destroy_all
Reward.destroy_all

puts "Creating Users..."
jesse = User.new(username: 'Jesse Wong', 
  email: "jessewong@email.com", 
  password: "123456", 
  img_url: "http://res.cloudinary.com/quickstarter/image/upload/v1506308070/katrina_user_rmzxd2.jpg" )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/speedRacer.jpg')
jesse.photo.attach(io: file, filename: 'speedRacer.jpg')
jesse.save

user1 = User.new(username: "theNextElon", 
  email: "name@email.com", 
  password:"123456", 
  img_url: "http://res.cloudinary.com/quickstarter/image/upload/v1506308070/katrina_user_rmzxd2.jpg" )
  file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/elonTusk.png')
user1.photo.attach(io: file, filename: 'elon.png')
user1.save

user2 = User.new(username: 'theIdeaGuy', 
  email: "email@email.com", 
  password: 'password', 
  img_url: "http://res.cloudinary.com/quickstarter/image/upload/v1506308158/user-avatar-placeholder_hdsliy.png")
  file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/lightbulb.png')
user2.photo.attach(io: file, filename: 'light.png')
user2.save

user3 = User.new(username: 'Quick_Silver', 
  email: "LookAround@email.com", 
  password: 'secure', 
  img_url: "http://res.cloudinary.com/quickstarter/image/upload/v1506308158/user-avatar-placeholder_hdsliy.png")
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/userIcon.png')
user3.photo.attach(io: file, filename: 'icon.png')
user3.save



puts "Creating Categories..."
cat1 = Category.create(name: "Art")
cat2 = Category.create(name: "Food")
cat3 = Category.create(name: "Music")
cat4 = Category.create(name: "Technology")
cat5 = Category.create(name: "Fashion")
cat6 = Category.create(name: "Film & Video")

puts "Creating Projects..."
jesse_project = Project.new(
  title: "this is a Title", 
  author_id: jesse.id, 
  funding_goal: 120000, 
  funding_deadline: '2020-08-05', 
  description: "Description about myself", 
  category_id: cat1, 
  backer_count: 0, 
  total_funded: 1993 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/cove.jpeg')
jesse_project.photo.attach(io: file, filename: 'cove.jpg')
jesse_project.save

project1= Project.new(
  title: "Doggy Hotel: For Dogs by Dogs",
  author_id: user1.id, 
  funding_goal: 5410, 
  funding_deadline: '2020-08-05', 
  description: "Help fund this Doggo owned and Doggo run hotel! A milkbone in every room and an extra large toilet bowl that can be filled with champagne for special occaisons upon request. We are committed to bringing you a cat free and chocolate free stay at one of our many locations worldwide. Support our mission and donate below!", 
  category_id: cat1.id,
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/dogs.jpeg')
project1.photo.attach(io: file, filename: 'dogs.jpg')
project1.save

project2= Project.new(
  title: "Get Poor Slow", 
  author_id: user1.id, 
  funding_goal: 3410, 
  funding_deadline: Date.new(2020, 12, 9), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat2.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/coins.jpeg')
project2.photo.attach(io: file, filename: 'coins.jpg')
project2.save

project3= Project.new(
  title: "America's Next Top Child Artist", 
  author_id: user2.id, 
  funding_goal: 2110, 
  funding_deadline: Date.new(2020, 6, 12), 
  description: "Adult artists are so last year! Even Teenage artist can be too anxsty to really want to support. Everyone loves child art, well let's see who's finger-painting skills can take them to the next level! This one of a kind competition is coming to a pre-school near you. All we need is your support to help make your children into the stars that you all see them as. Why hang your child's art on your refirigerator when you can hang it in the Louvre! Support and Donate below!", 
  category_id: cat1.id, 
  backer_count: 0, 
  total_funded: 0  )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/finger_paint.jpeg')
project3.photo.attach(io: file, filename: 'finger_paint.jpg')
project3.save

project4= Project.new(
  title: "Title #4", 
  author_id: user1.id, 
  funding_goal: 6010, 
  funding_deadline: Date.new(2020, 8, 10), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat2.id, 
  backer_count: 0, 
  total_funded: 0  )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/pool.jpeg')
project4.photo.attach(io: file, filename: 'pool.jpg')
project4.save

project5= Project.new(
  title: "TSA: The Mix Tape", 
  author_id: user3.id, 
  funding_goal: 9010, 
  funding_deadline: Date.new(2020, 10, 1), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat3.id, 
  backer_count: 0, 
  total_funded: 0  )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/airport.jpeg')
project5.photo.attach(io: file, filename: 'airport.jpg')
project5.save

project6= Project.new(
  title: "Title #6", 
  author_id: user2.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2020, 4, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat5.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/gentle_mountains.jpeg')
project6.photo.attach(io: file, filename: 'mountains.jpg')
project6.save

project7= Project.new(
  title: "Title #7", 
  author_id: user3.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2020, 11, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat3.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/produce.jpeg')
project7.photo.attach(io: file, filename: 'produce.jpg')
project7.save

project8= Project.new(
  title: "Title #8", 
  author_id: user1.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2021, 1, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat4.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/records.jpeg')
project8.photo.attach(io: file, filename: 'records.jpg')
project8.save

project9= Project.new(
  title: "Title #9", 
  author_id: user3.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2021,2, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat5.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/stain_glass.jpeg')
project9.photo.attach(io: file, filename: 'stain_glass.jpg')
project9.save

puts "Building second set of projects..."
project1= Project.new(
  title: "Doggy Hotel: For Dogs by Dogs",
  author_id: user1.id, 
  funding_goal: 5410, 
  funding_deadline: '2012-08-05', 
  description: "Help fund this Doggo owned and Doggo run hotel! A milkbone in every room and an extra large toilet bowl that can be filled with champagne for special occaisons upon request. We are committed to bringing you a cat free and chocolate free stay at one of our many locations worldwide. Support our mission and donate below!", 
  category_id: cat1.id,
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/dogs.jpeg')
project1.photo.attach(io: file, filename: 'dogs.jpg')
project1.save

project2= Project.new(
  title: "Get Poor Slow", 
  author_id: user1.id, 
  funding_goal: 3410, 
  funding_deadline: Date.new(2020, 12, 9), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat2.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/coins.jpeg')
project2.photo.attach(io: file, filename: 'coins.jpg')
project2.save

project3= Project.new(
  title: "America's Next Top Child Artist", 
  author_id: user2.id, 
  funding_goal: 2110, 
  funding_deadline: Date.new(2020, 6, 12), 
  description: "Adult artists are so last year! Even Teenage artist can be too anxsty to really want to support. Everyone loves child art, well let's see who's finger-painting skills can take them to the next level! This one of a kind competition is coming to a pre-school near you. All we need is your support to help make your children into the stars that you all see them as. Why hang your child's art on your refirigerator when you can hang it in the Louvre! Support and Donate below!", 
  category_id: cat1.id, 
  backer_count: 0, 
  total_funded: 0  )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/finger_paint.jpeg')
project3.photo.attach(io: file, filename: 'finger_paint.jpg')
project3.save

project4= Project.new(
  title: "Title #4", 
  author_id: user1.id, 
  funding_goal: 6010, 
  funding_deadline: Date.new(2020, 8, 10), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat2.id, 
  backer_count: 0, 
  total_funded: 0  )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/pool.jpeg')
project4.photo.attach(io: file, filename: 'pool.jpg')
project4.save

project5= Project.new(
  title: "TSA: The Mix Tape", 
  author_id: user3.id, 
  funding_goal: 9010, 
  funding_deadline: Date.new(2020, 10, 1), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat3.id, 
  backer_count: 0, 
  total_funded: 0  )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/airport.jpeg')
project5.photo.attach(io: file, filename: 'airport.jpg')
project5.save

project6= Project.new(
  title: "Title #6", 
  author_id: user2.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2020, 4, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat5.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/gentle_mountains.jpeg')
project6.photo.attach(io: file, filename: 'mountains.jpg')
project6.save

project7= Project.new(
  title: "Title #7", 
  author_id: user3.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2020, 11, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat3.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/produce.jpeg')
project7.photo.attach(io: file, filename: 'produce.jpg')
project7.save

project8= Project.new(
  title: "Title #8", 
  author_id: user1.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2021, 1, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat4.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/records.jpeg')
project8.photo.attach(io: file, filename: 'records.jpg')
project8.save

project9= Project.new(
  title: "Title #9", 
  author_id: user3.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2021,2, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat5.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/stain_glass.jpeg')
project9.photo.attach(io: file, filename: 'stain_glass.jpg')
project9.save


# project7= Project.create(title: "Doggy Hotel: For Dogs by Dogs", author_id: user1.id, funding_goal: 5410, funding_deadline: '2019-08-05', description: "Help fund this Doggo owned and Doggo run hotel! A milkbone in every room and an extra large toilet bowl that can be filled with champagne for special occaisons upon request. We are committed to bringing you a cat free and chocolate free stay at one of our many locations worldwide. Support our mission and donate below!", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713905/christopher-gower-289520-unsplash_rpy3tw.jpg", backer_count: 0, total_funded: 0 )
# project8= Project.create(title: "Get Poor Slow", author_id: user1.id, funding_goal: 4410, funding_deadline: Date.new(2020, 1, 9), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312207/lily-lvnatikk-267356_mkeshi.jpg", backer_count: 0, total_funded: 0 )
# project9= Project.create(title: "America's Next Top Child Artist", author_id: user2.id, funding_goal: 2110, funding_deadline: Date.new(2020, 10, 12), description: "Adult artists are so last year! Even Teenage artist can be too anxsty to really want to support. Everyone loves child art, well let's see who's finger-painting skills can take them to the next level! This one of a kind competition is coming to a pre-school near you. All we need is your support to help make your children into the stars that you all see them as. Why hang your child's art on your refirigerator when you can hang it in the Louvre! Support and Donate below!", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713924/amaury-salas-324504-unsplash_wkklk2.jpg", backer_count: 0, total_funded: 0  )
# project10= Project.create(title: "Title #10", author_id: user1.id, funding_goal: 6010, funding_deadline: Date.new(2020, 8, 10), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312206/joshua-sortino-228788_kf4wyj.jpg", backer_count: 0, total_funded: 0  )
# project11= Project.create(title: "TSA: The Mix Tape", author_id: user3.id, funding_goal: 8010, funding_deadline: Date.new(2020, 10, 1), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat3.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713905/michal-parzuchowski-262847-unsplash_di3xez.jpg", backer_count: 0, total_funded: 0  )
# project12= Project.create(title: "Title #12", author_id: user2.id, funding_goal: 7231, funding_deadline: Date.new(2020, 4, 4), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat3.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312201/andrea-cau-51160_nc4h1o.jpg", backer_count: 0, total_funded: 0 )
# project13= Project.create(title: "Doggy Hotel: For Dogs by Dogs", author_id: user1.id, funding_goal: 5410, funding_deadline: '2019-08-05', description: "Help fund this Doggo owned and Doggo run hotel! A milkbone in every room and an extra large toilet bowl that can be filled with champagne for special occaisons upon request. We are committed to bringing you a cat free and chocolate free stay at one of our many locations worldwide. Support our mission and donate below!", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713905/christopher-gower-289520-unsplash_rpy3tw.jpg", backer_count: 0, total_funded: 0 )
# project14= Project.create(title: "Get Poor Slow", author_id: user1.id, funding_goal: 9410, funding_deadline: Date.new(2020, 1, 9), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312207/lily-lvnatikk-267356_mkeshi.jpg", backer_count: 0, total_funded: 0 )
# project15= Project.create(title: "America's Next Top Child Artist", author_id: user2.id, funding_goal: 2110, funding_deadline: Date.new(2020, 10, 12), description: "Adult artists are so last year! Even Teenage artist can be too anxsty to really want to support. Everyone loves child art, well let's see who's finger-painting skills can take them to the next level! This one of a kind competition is coming to a pre-school near you. All we need is your support to help make your children into the stars that you all see them as. Why hang your child's art on your refirigerator when you can hang it in the Louvre! Support and Donate below!", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713924/amaury-salas-324504-unsplash_wkklk2.jpg", backer_count: 0, total_funded: 0  )
# project16= Project.create(title: "Title #16", author_id: user1.id, funding_goal: 1010, funding_deadline: Date.new(2020, 8, 10), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312206/joshua-sortino-228788_kf4wyj.jpg", backer_count: 0, total_funded: 0  )
# project17= Project.create(title: "TSA: The Mix Tape", author_id: user3.id, funding_goal: 8010, funding_deadline: Date.new(2020, 10, 1), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat3.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713905/michal-parzuchowski-262847-unsplash_di3xez.jpg", backer_count: 0, total_funded: 0  )
# project18= Project.create(title: "Title #18", author_id: user2.id, funding_goal: 5731, funding_deadline: Date.new(2020, 4, 4), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat3.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312201/andrea-cau-51160_nc4h1o.jpg", backer_count: 0, total_funded: 0 )
# project19= Project.create(title: "Doggy Hotel: For Dogs by Dogs", author_id: user1.id, funding_goal: 5410, funding_deadline: '2019-08-05', description: "Help fund this Doggo owned and Doggo run hotel! A milkbone in every room and an extra large toilet bowl that can be filled with champagne for special occaisons upon request. We are committed to bringing you a cat free and chocolate free stay at one of our many locations worldwide. Support our mission and donate below!", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713905/christopher-gower-289520-unsplash_rpy3tw.jpg", backer_count: 0, total_funded: 0 )
# project20= Project.create(title: "Get Poor Slow", author_id: user1.id, funding_goal: 4410, funding_deadline: Date.new(2020, 1, 9), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312207/lily-lvnatikk-267356_mkeshi.jpg", backer_count: 0, total_funded: 0 )
# project21= Project.create(title: "America's Next Top Child Artist", author_id: user2.id, funding_goal: 2110, funding_deadline: Date.new(2020, 10, 12), description: "Adult artists are so last year! Even Teenage artist can be too anxsty to really want to support. Everyone loves child art, well let's see who's finger-painting skills can take them to the next level! This one of a kind competition is coming to a pre-school near you. All we need is your support to help make your children into the stars that you all see them as. Why hang your child's art on your refirigerator when you can hang it in the Louvre! Support and Donate below!", category_id: cat1.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713924/amaury-salas-324504-unsplash_wkklk2.jpg", backer_count: 0, total_funded: 0  )
# project22= Project.create(title: "Title #22", author_id: user1.id, funding_goal: 2010, funding_deadline: Date.new(2020, 8, 10), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat2.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312206/joshua-sortino-228788_kf4wyj.jpg", backer_count: 0, total_funded: 0  )
# project23= Project.create(title: "TSA: The Mix Tape", author_id: user3.id, funding_goal: 3810, funding_deadline: Date.new(2020, 10, 1), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat3.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1519713905/michal-parzuchowski-262847-unsplash_di3xez.jpg", backer_count: 0, total_funded: 0  )
# project24= Project.create(title: "Title #24", author_id: user2.id, funding_goal: 4231, funding_deadline: Date.new(2020, 4, 4), description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", category_id: cat3.id, title_image: "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312201/andrea-cau-51160_nc4h1o.jpg", backer_count: 0, total_funded: 0 )


puts "Creating Rewards..."
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


puts "Finished seeding!"









# RESUME PROJECT
# user17 = User.create(username: "Your Next Developer", email: "name@email.com", password:"123456", img_url: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1518325619/headshot_fyzldg.jpg" )
