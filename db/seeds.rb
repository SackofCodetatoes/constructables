# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'demo', email: "demo@demo.com", password: 'password', age: 21)
Project.create(title: "Project: Rad", description: "One Rad Project that combines all the awesome projects into one.", user_id: 1)
Step.create(project_id: 1, title: 'Acquire materials', body: 'some filler text should go here', step_index: 0)
Step.create(project_id: 1, title: 'use amterials', body: 'some filler text should go here!!!!!', step_index: 1)

User.create(username: 'Alfred', email: "demo2@demo.com", password: 'password', age: 21)
Project.create(title: "Basket Weaving", description: "A tutorial about basketweaving for the uninitiated. Now wait! Before you say' why would i ever need to learn how to basket weave', its not a very useful trait, i ask you when is a basket not handy?", user_id: 1)
Step.create(project_id: 2, title: 'Acquire materials', body: 'find a suitable material that you wish to create a basket from. I shall be using fiberglass to create a sturdy basket', step_index: 0)
Step.create(project_id: 2, title: 'Weave it up!', body: 'Assuming you know basic weavmenship, this should be a sinch as I forgot to mention this is an advanced tutorial for master weavesmen, meaning this step is self explainatory', step_index: 1)

User.create(username: 'Nemo', email: "demo3@demo.com", password: 'password', age: 21)
Project.create(title: "Creating a coral home", description: "Today I will be teaching you how to build your own home with just coral and coral accessories! Why you ask? Because coral is a strong structure that can also be your lifelong friend! Also it acts as a backsracther", user_id: 3)
Step.create(project_id: 3, title: 'Acquire materials', body: 'First off, find yourself a coral reef to supply yourself with the neccesary materials. You can just ask them nicely to come along, and they will! If they dont, nudge them a lil, talk to them about their day and then they will!', step_index: 0)
Step.create(project_id: 3, title: 'Build!!', body: 'Bring all your new found friends back to a desired location and let them rest, they have had a long day and need the rest, your home is now done!', step_index: 1)

User.create(username: 'Site Admin', email: "admin3@demo.com", password: 'password123', age: 21)
Project.create(title: "Creating a FullStack project", description: "You might be wondering, o boy, all these jobs i want all seem to want a person that can do fullstack, but i have no idea how to do that! Well youre in luck today as I will outline some neccesary steps to creating a great fullstack project!", user_id: 4)
Step.create(project_id: 4, title: "Finding a project", body: "First step is to find yourself a nice lil sample project to clone, for example, thus fancy smancy site might be a good candidate", step_index: 0)
Step.create(project_id: 4, title: 'Contemplate your life decisions', body: "Unfortunately due to the lack of time, I will be concluding this guide here and will create updates in the future!", step_index: 1)

# user 5
User.create(username: 'Michael Scott', email: "mscott@dunder.mifflin", password: 'babiespassword', age: 46)
Project.create(title: "Somehow I Manage", description: "Nice to meet you all, I am Michael Scott, Regional Manager of Dunder Mifflin Paper Company, and I am excited to bring to you an exclusive never before seen world preview of 'Somehow I Manage', written by your's truly. First off, you might be asking yourself this, 'Michael, how can I trust an article written by technology, after it nearly killed you?' To that I say, everyone deserves a second-second chance. I gave Ryan a second-second chance and look at where he is now. He's my best friend, and that is a wonderful position. But, yes, while technology can steer us in the wrong direction, quite latterally, if it weren't for technology, we wouldn't have Wikipedia, and that is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information. So the internet is quite possibly the truest source of information you're going to get, and quite honestly, should be your only source of information. The information is so true, that college papers have been written using Wikipedia! How crazy is that? Oh and that brings me back to somehow I manage. So in no particular order here is a sneak peak at how you can become just like me, a successful manager.", user_id: 5)

Step.create(project_id: 5, title: "Trust Your Instincts", body: "Nobody wants to be wrong, and quite frankly you should always follow your instincts, no matter how much everyone tells you not to. I followed my insincts once, and lets just say, someone was very lucky. Until everyone kept telling that someone he was doing something wrong. I mean, it was love at first sight. Actually it was ... No, it was when I heard her voice. It was love at first see with my ears. I mean, you dont even need to know what to say. I leave my speaches up to instinct. Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way, and usually it does, all because I trusted my insincts. Yes.", step_index: 0)

Step.create(project_id: 5, title: "Be the cool boss", body: "I love inside jokes. I'd love to be part of one someday. That is why you should always be the cool boss, no matter what. I mean, you're already their boss, so all you need to do is do as many cool things as you can to make your workers think, 'wow, I work for the coolest boss in the world', and they'll work ten times harder, trying to be like you. But that doesn't mean you let things slide. You have to have get enough respect from your employees so that you can say dance, and they say 'How high?' It's a matter of coolness and once you have enough of it, like I do, then you're one step closer to being one of the best bosses, after me. I mean, do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it's not like this compulsive need to be liked, like my need to be praised. In the end, I rather be both feared and loved. I want people to be afraid of how much they love me.", step_index: 1)

Step.create(project_id: 5, title: "Get along with your workers", body: "There is nothing more important than getting along with your coworkers. It's like I always say, the office Is like a home, and everyone here is family. An office is for not dying. An office is a place to live life to the fullest, to the max. An office is a place where dreams come true. So always Make friends first, make sales second, make love third. In no particular order. If you don't have enough friends, you go to jail. I've seen it on television, and you dont want me to get started on prison. Prison Mike just got out of there and the worst thing about prison was the dementors. I'm not superstitious but I am a little stitious. You don't want to go to prison. But just because everyone's friends in the office doesn't mean you can't be lovers. Some of the best relationships started in my very office. I just have a magical love aura that just brings people together. I don't user it for myself because I would say I kind of have an unfair advantage, because I watch reality dating shows like a hawk, and I learn. I absorb information from the strategies of the winners and the losers. Actually, I probably learn more from the losers. Oh, and Toby is in HR which technically means he works for corporate. So he's not really a part of our family. Also he's divorced, so he's not really a part of his family.", step_index: 2)

Step.create(project_id: 5, title: "Have Passion", body: "I can't stress this enough, in the end, its all about the passion to doing what you love. I love being a manager and being in sales. When I had no other option, I created my own paper company. I knew my ins and outs with paper and I knew it was what I wanted to do. So when I didn't have a job, I started my own paper company, Michael Scott's Paper Company. And even then, it was a tough start. None of my friends believed in me, I didn't know how I was going to get started, and I was broke like a joke. It was hard. That's what she said. But through passion, and customer experience, my team was able to make sales, turn things around, and make a dent in the big guys. It was our passion that brought us our success and thats the only thing you need to be a salesman.", step_index: 3)

# user 6
User.create(username: 'omgitsdvd', email: "omg@dvd.com", password: 'itsdvdomg', age: 21)
Project.create(title: "", description: "", user_id: 6)
Step.create(project_id: 6, title: "", body: "", step_index: 0)
Step.create(project_id: 6, title: "", body: "", step_index: 1)


# User.create(username: '', email: "", password: '', age: 21)
# Project.create(title: "", description: "", user_id: 4)
# Step.create(project_id: 4, title: "", body: "", step_index: 0)
# Step.create(project_id: 4, title: "", body: "", step_index: 1)

# Project.create(title: "DIY: Book", description: "Create a custom book with these materials.", user_id: 1)
# Project.create(title: "Table Adventures", description: "Dungeons and Dragons table build guide.", user_id: 2)
# Project.create(title: "Walking Coral", description: "COOORAAAAAAAAAAL.", user_id: 3)
# Project.create(title: "Kenta needs kelp!", description: "Ahh! Cave bats!.", user_id: 3)
# Project.create(title: "Gameboy Hoodie", description: "Fits XL Gameboys.", user_id: 4)