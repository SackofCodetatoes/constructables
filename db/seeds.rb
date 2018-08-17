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

User.create(username: 'Beemo', email: "demo4@demo.com", password: 'password', age: 21)
# Project.create(title: "DIY: Book", description: "Create a custom book with these materials.", user_id: 1)
# Project.create(title: "Table Adventures", description: "Dungeons and Dragons table build guide.", user_id: 2)
# Project.create(title: "Walking Coral", description: "COOORAAAAAAAAAAL.", user_id: 3)
# Project.create(title: "Kenta needs kelp!", description: "Ahh! Cave bats!.", user_id: 3)
# Project.create(title: "Gameboy Hoodie", description: "Fits XL Gameboys.", user_id: 4)