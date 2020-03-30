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
cat3 = Category.create(name: "Life")
cat4 = Category.create(name: "Technology")
cat5 = Category.create(name: "Fashion")
cat6 = Category.create(name: "Media")


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
  category_id: cat3.id,
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
  category_id: cat4.id, 
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
  description: "Adult artists are so last year! Even Teenage artist can be too anxsty to really want to support. 
              Everyone loves child art, and we're going to see who's finger-painting skills can take them to the next level! This one of a kind competition is coming to a pre-school near you. 
              All we need is your support to help make your children into the stars that you all see them as. Why hang your child's art on your refrigerator when you can hang it in the Louvre! 
              
              Support and Donate below!", 
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
  category_id: cat6.id, 
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
  description: "Your favorite government travel agency is back at it again spitting hotter fire then a twin turbo jet engine. 
  With rhymes this tight you won't have room for a carry-on. 
  With bars this fire you won't be able to get it through security. 
  The master MC's in the TSA across the United State have put together a sampling of regional music styles perfect for your next flight. 
  With fresh tracks such as: Paper too tall to carry-on, Baggage Claim Cypher, and Air Traffic Controlla ft. Drake, this mixtape is sure to be a hit. 
  Your support will help us take our music to the next level."
  category_id: cat6.id, 
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
  description: "The Home Network went looking for the next primetime show for it's network and we won their content creation sweepstakes! 
  Our project is looking to spread the joy of painting that we explored in our show, and bring it to the masses. Our project is aiming to provide structure and danger free leisure activities to schools around the nation. 
  What is safer than soccer? 
  Better for brain delopment than blocks? 
  Prettier than the playground? 
  You guessed it! Watching paint dry is the new craze sweeping the nation. Fun for all ages and teaches important life skills like sitting, patience, and dealing with extreme boredom. Join us in our efforts to share these exciting activites with the world. So go out, grab some family or friends, and watch that joyful paint drying event with the important people in your life!", 
  category_id: cat1.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/gentle_mountains.jpeg')
project6.photo.attach(io: file, filename: 'mountains.jpg')
project6.save

project7= Project.new(
  title: "Wardrobe Wizards!", 
  author_id: user3.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2020, 11, 4), 
  description: "Have you ever wanted to add a little magic into your look? Pulling from warlocks and witches across over 25 different realms, our Wardobe Wizards project is the project for you! 
                With state of the art elemental magic, we correctly divine the clothes guaranteed to fit you best and turn heads! We source the finest pickled lizards and mystic dragon scales for our divination potions sure to never miss the fashion mark. 
                Our infallible crystal ball 🔮 readings help us know what you should wear to your next business meeting, hot date, or family affair. Fashion science? Scratch that! We have something better than science. 
                The brain child of Harry Potter and Ron Weasley, this is sure to be a bigger hit than their last Quidditch Game!", 
  category_id: cat5.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/produce.jpeg')
project7.photo.attach(io: file, filename: 'produce.jpg') # wizard image?
project7.save

project8= Project.new(
  title: "Cute Cat Content Consortium", 
  author_id: user1.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2021, 1, 4), 
  description: "A couple of fine felines from around the way finally put together all their furriest photos and videos in one convenient location! Our dedicated team is commited to sharing the wonders of cute cat content around the world. When the aliens finally take over the planet, they will know about mankind's love for our furry friends! 
  Do you love seeing cute cats cooperate to take down the neighborhood doggo? 
  Does seeing a cute kitty cuddling with a baby hooman just make your day? 
  We've got it all and we're getting more by the day! Support our project and join us on this journey to establish the first worldwide cute cat content consortium!", 
  category_id: cat4.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/records.jpeg')
project8.photo.attach(io: file, filename: 'records.jpg') # cat photo
project8.save

project9= Project.new(
  title: "Never Notebook: The first notebook you'll never use!", 
  author_id: user3.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2021,2, 4), 
  description: "Never Notebook is the best notebook you never knew you needed! 
  Our full service production company prints the finest notebooks around by hand, and the best part is, you don't even have to write in them! 
  We'll fill the notebook with all kinds of information and random scribbles so you don't have to! 
  If you've ever wanted to seem like you've thought alot about things and are a dilligent note-taker, it's never been easier. Perfect for stocking your desk, bookshelves with totally full notebooks that you'll never write in because we already have!
  We source notebooks from all over: schools, offices, libraries, even banks! We're guaranteed to have the perfect notebook for you. 
  A timeless product that you can flip through over and over looking at notes you didn't write to pass the time. 
  Support now to help us put a notebook nobody will ever use in every home in America!", 
  category_id: cat5.id,
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/stain_glass.jpeg')
project9.photo.attach(io: file, filename: 'stain_glass.jpg') # notebook
project9.save

# # 
puts "Creating Rewards(Set 1)..."
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
Reward.create(project_id: project6.id, pledge_amount: 150, gift: "Custom Paint Can", gift_description: "You want red paint? You want blue paint? You want green paint? Oh, also we'll write your name on the paint can!")
Reward.create(project_id: project6.id, pledge_amount: 200, gift: "Official Paint Observation Specs", gift_description: "Never before have you had a paint drying experience like this! Guaranteed to help you see every bit of paint dry with our Official Paint Observation Specs. Think you've seen it all? THINK!AGAIN!")

Reward.create(project_id: project7.id, pledge_amount: 100, gift: "Sorting Cat", gift_description: "From the creators of the Sorting Hat comes the Sorting Cat! The ultimate companion uniquely trained to shred all your non-trendy clothes. *Might also shred some of your trendy furniture though*")
Reward.create(project_id: project7.id, pledge_amount: 230, gift: "DIY Diviniation Potion Kit", gift_description: "We'll send you everything you need to make your own divination potion from the comfort of your own home. Take it before that big meeting to know just what to wear to crush that presentation!")
Reward.create(project_id: project7.id, pledge_amount: 500, gift: "🔮 Reading!", gift_description: "We'll tell you exactly what to wear to attract the love of your life!(probably)")

Reward.create(project_id: project8.id, pledge_amount: 50, gift: "Hairball", gift_description: "We'll send you a hairball from you favorite Cute Cat Content set inside of a glass paper weight. It'll be the perfect additon to your work desk or fireplace mantle.")
Reward.create(project_id: project8.id, pledge_amount: 150, gift: "Custom Cat Meme", gift_description: "We'll send you a personal meme using some of our original cute cat content. Guaranteed to make you laugh or at least go 'awwwwwwwwwwwwwwww'.")
Reward.create(project_id: project8.id, pledge_amount: 200, gift: "Meet your hero!", gift_description: "You can meet the cat from your favorite cat video! It's like meeting a movie star if that movie star was furry and couldn't say words!")

Reward.create(project_id: project9.id, pledge_amount: 50, gift: "Named Notebook", gift_description: "We'll even write your name on the front cover and on the first page! Guaranteed to serve as great proof that it is totally your notebook.")
Reward.create(project_id: project9.id, pledge_amount: 150, gift: "Wear and Tear", gift_description: "We'll put your notebook through our patented wear and tear workover until it looks like it's seen at least 3 different backpacks, survived more than 7 spills, and has more folded pages than an origami classroom.")
Reward.create(project_id: project9.id, pledge_amount: 200, gift: "Mystery Notebook", gift_description: "We'll rip out a random 10 pages from your notebook leaving you and whoever else flips through the notebook later to wonder what youre missing out on.")
# 
# 

puts "Building second set of projects..."
project1= Project.new(
  title: "Another Fun Project!",
  author_id: user1.id, 
  funding_goal: 5410, 
  funding_deadline: '2012-08-05', 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat1.id,
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/dogs.jpeg')
project1.photo.attach(io: file, filename: 'dogs.jpg')
project1.save

project2= Project.new(
  title: "The Best Project Around!", 
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
  title: "Project #5: The Sequel", 
  author_id: user2.id, 
  funding_goal: 2110, 
  funding_deadline: Date.new(2020, 6, 12), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat1.id, 
  backer_count: 0, 
  total_funded: 0  )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/finger_paint.jpeg')
project3.photo.attach(io: file, filename: 'finger_paint.jpg')
project3.save

project4= Project.new(
  title: "The Next Best Thing", 
  author_id: user1.id, 
  funding_goal: 6010, 
  funding_deadline: Date.new(2020, 8, 10), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat6.id, 
  backer_count: 0, 
  total_funded: 0  )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/pool.jpeg')
project4.photo.attach(io: file, filename: 'pool.jpg')
project4.save

project5= Project.new(
  title: "Mediocre Project: An Underdog Story", 
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
  title: "Quick Start your Quick Start", 
  author_id: user2.id, 
  funding_goal: 6231, 
  funding_deadline: Date.new(2020, 4, 4), 
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  category_id: cat1.id, 
  backer_count: 0, 
  total_funded: 0 )
file = open('https://quick-starter-dev.s3-us-west-1.amazonaws.com/gentle_mountains.jpeg')
project6.photo.attach(io: file, filename: 'mountains.jpg')
project6.save

project7= Project.new(
  title: "Project 93: A Good Year", 
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
  title: "My Favorite Project", 
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
  title: "Project Project", 
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
  title: "Sleepy Project", 
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
puts "Creating Rewards(Set 2)..."
Reward.create(project_id: project1.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project1.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project1.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project2.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project2.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project2.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project3.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project3.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project3.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project4.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project4.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project4.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project5.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project5.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project5.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project6.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project6.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project6.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project7.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project7.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project7.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project8.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project8.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project8.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project9.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project9.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project9.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")

Reward.create(project_id: project10.id, pledge_amount: 50, gift: "A Thank You", gift_description: "Thanks for all your support! Let us send you a thank you!")
Reward.create(project_id: project10.id, pledge_amount: 100, gift: "A Really Big Thank You", gift_description: "Wow! We're so thankful for your support! Thanks!")
Reward.create(project_id: project10.id, pledge_amount: 125, gift: "The Biggest Thank You", gift_description: "Oh jeepers! Thank's for everything! Thank you. Thank you. Thank YOU!")



puts "Finished seeding!"









# RESUME PROJECT
# user17 = User.create(username: "Your Next Developer", email: "name@email.com", password:"123456", img_url: "http://res.cloudinary.com/quickstarter/image/upload/q_100/v1518325619/headshot_fyzldg.jpg" )
