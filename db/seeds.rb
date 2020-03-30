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
Category.destroy_all

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

# 
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
  description: "Help fund this Doggo owned and Doggo run hotel! 
                A milkbone in every room and an extra large toilet bowl that can be filled with champagne for special occaisons upon request. 
                We are committed to bringing you a cat-free and chocolate-free stay at one of our many locations worldwide. 
                Support our mission and donate below!", 
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
  description: "Howdy fellow friends with dollar signs for eyes! 🤑 🤑 
                Would you like some tips on how to keep your dollar signs in your eyes and the money in your bank?? 
                
                This is the project for you! Buy my book and it'll be the last money you ever spend!(maybe) We have compiled all the tips and tricks you need to keep your money right where you want it. Don't spend. Don't loose. Everybody get's poor, but we want to maximize how we GET POOR SLOWLY!
                Follow me to prosperity friends!!!", 
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

# 
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
  title: "Why Did the Chicken Cross the Road?: A Think Piece", 
  author_id: user1.id, 
  funding_goal: 6010, 
  funding_deadline: Date.new(2020, 8, 10), 
  description: "We've all wondered it. We've all discussed it. Some of us have even joked about it.
  Today we're going to finally get to the bottom of it. Why did the chicken cross the road? This and many of the other unanswered questions surrounding chickens and their fundamental role in modern society will be disected and theorized about at length! Come join us on this journey as we send out monthly updates about our ongoing chicken research. Support for our project is support for curiosity, culture, and of course chicken. Join the pursuit of poultry and higher education!", 
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
  title: "D.R.Y. Painting Show", 
  author_id: user2.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2020, 4, 4), 
  description: "The Home Network went looking for the next primetime show for it's network and we won their content creationg sweepstakes! 
  Our project is looking to spread the joy of painting that we explored in our show, and bring it to the masses. Our project is aiming to provide structure and danger free leisure activities to schools around the nation. 
  What is safer than soccer? 
  Better for brain delopment than blocks? 
  Prettier than the playground? 
  You guessed it! Watching paint dry is the new craze sweeping the nation. Fun for all ages and teaches important life skills like sitting, patience, and dealing with extreme boredom. Join us in our efforts to share these exciting activites with the world. So go out, grab some family or friends, and watch that joyful paint drying event with the important people in your life!", 
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

project10= Project.new(
  title: "Title #9", 
  author_id: user3.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2021,2, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat5.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/stain_glass.jpeg')
project10.photo.attach(io: file, filename: 'stain_glass.jpg')
project10.save


# 
puts "Creating Rewards..."
Reward.create(project_id: project1.id, pledge_amount: 50, gift: "Fresh Milk Bone", gift_description: "A extra fresh milk bone delivered on arrival to our hotel for your first stay")
Reward.create(project_id: project1.id, pledge_amount: 100, gift: "King Sized Doggy Bed", gift_description: "Upgrade that chihuahua sized doggy bed to a great dane sized bed!")
Reward.create(project_id: project1.id, pledge_amount: 125, gift: "Hooman Experience!", gift_description: "Hooman will accompany you to the nearest park to play with your favorite toys! They'll even bring treats!")

Reward.create(project_id: project2.id, pledge_amount: 50, gift: "Unbreakable Piggy Bank", gift_description: "Put your spare and loose change in here! Want to buy that shiny new pack of bubblegum from the local store? Nope can't get your change out. Send us back this piggy bank when it gets full and we'll send you back your money for only a 10% piggy bank removal fee. ")
Reward.create(project_id: project2.id, pledge_amount: 150, gift: "Group Money Therapy Membership", gift_description: "Join us for a monthly meeting to talk finances and which of our services you need to buy to save more money!")
Reward.create(project_id: project2.id, pledge_amount: 200, gift: "A Money Dude", gift_description: "Feel like you spend too much money? You need a Money Dude. They'll take your wallet from you when you try and make expensive purchases. They'll hide your debit cards when you're thinking about going on an online spending spree. They got your backs and your bank accounts!")
Reward.create(project_id: project2.id, pledge_amount: 220, gift: "Free Money", gift_description: "For every dollar that you pay us, we'll pay you a dollar and one penny a year later. It's free money! A great way to 'Get Poor Slow' is by having your money grow without you having to do anything at all!")

Reward.create(project_id: project3.id, pledge_amount: 50, gift: "Free T-Shirt", gift_description: "If you support now you'll receive a free t-shirt designed by the winner of our innagural season of America's Next Top Child Artist!")
Reward.create(project_id: project3.id, pledge_amount: 150, gift: "Meet the Future of Art", gift_description: "Purchasing this inside reward means on day 1 of production you'll be invited to come meet all the contestants on our first season fo America's Next Top Child Artist!")
Reward.create(project_id: project3.id, pledge_amount: 200, gift: "Custom Art Materials", gift_description: "When the first season ends we'll take the art materials used during the production of the show and build you the perfect starter art kit. It'll come with everything you need to show your neighborhood kids who has the better fingerpainting skills. Don't miss out!")

Reward.create(project_id: project4.id, pledge_amount: 48, gift: "Chicken Feathers", gift_description: "We'll send you some of our favorite fallen chicken feathers from our lovely chickens on our chicken farm. No chickens will be harmed in the collecting of these feathers.")
Reward.create(project_id: project4.id, pledge_amount: 125, gift: "Jokes From the Vault", gift_description: "We'll send you access to never before seen or heard 'Why Did the Chicken Cross the Road' jokes and riddles. Your ticket to becoming the coolest chicken on the block just got easier to find.")
Reward.create(project_id: project4.id, pledge_amount: 150, gift: "Chicken Chic", gift_description: "We'll send you some limited edition Chicken Chic attire. Options include, but are not limited to: Rooster Hoodie, Chicken C-shirt, Chicken Noodle Soup Spoon Earing, Chicken Tender Toe Socks.")
Reward.create(project_id: project4.id, pledge_amount: 200, gift: "Chicken", gift_description: "You get a free chicken. Her name will be Hilda. She lays eggs and likes maple syrup from the bottle.")

Reward.create(project_id: project5.id, pledge_amount: 20, gift: "Mixtape Pre-Sale List", gift_description: "We know this mixtape is going to be hotter than the sun and we know you do too. Purchasing this reward is your guaranteed ticket to getting first dibs on the hottest new music about to hit the air traffic control waves!")
Reward.create(project_id: project5.id, pledge_amount: 150, gift: "TSA Shout Out", gift_description: "We'll shout your name(social media handle) on the airport intercom for about 30 minutes straight the next time your fly. People will know your name far and wide. You'll become an overnight celebrity!")
Reward.create(project_id: project5.id, pledge_amount: 200, gift: "Custom Mixtape Package", gift_description: "All of our collaborators will sign your album before we send it out to you. This reward also includes access to the presale mixtape list. Every 5th purchaser of this reward will receive a cavity search on the house the next time you fly!")
Reward.create(project_id: project5.id, pledge_amount: 250, gift: "TSA Pre-Check", gift_description: "It might not say it on your boarding pass, but our TSA family will know who you are and always let you cut the security line. This supporter reward is definitely the best bang for your buck!")

Reward.create(project_id: project6.id, pledge_amount: 50, gift: "Paint Chips from the Show", gift_description: "Take a little piece of the show home today! A real paint chip from some real paint from our real show!!! Really.")
Reward.create(project_id: project6.id, pledge_amount: 150, gift: "Custom Paint Can", gift_description: "")
Reward.create(project_id: project6.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")

Reward.create(project_id: project7.id, pledge_amount: 50, gift: "a thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project7.id, pledge_amount: 150, gift: "a big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project7.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project8.id, pledge_amount: 50, gift: "a thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project8.id, pledge_amount: 150, gift: "a big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project8.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project9.id, pledge_amount: 50, gift: "a thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project9.id, pledge_amount: 150, gift: "a big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project9.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project10.id, pledge_amount: 50, gift: "a thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project10.id, pledge_amount: 150, gift: "a big thank you", gift_description: "a card and a hug and all that jazz")
Reward.create(project_id: project10.id, pledge_amount: 200, gift: "a really big thank you", gift_description: "a card and a hug and all that jazz")


puts "Finished seeding!"









# RESUME PROJECT
# user17 = User.create(username: "Your Next Developer", email: "name@email.com", password:"123456", img_url: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1518325619/headshot_fyzldg.jpg" )
