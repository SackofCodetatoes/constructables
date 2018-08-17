# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Step.delete_all
Project.delete_all
User.delete_all
User.create(username: 'demo', email: "demo@demo.com", password: 'password', age: 21)
User.create(username: 'Alfred', email: "demo2@demo.com", password: 'password', age: 21)
User.create(username: 'Nemo', email: "demo3@demo.com", password: 'password', age: 21)
User.create(username: 'Beemo', email: "demo4@demo.com", password: 'password', age: 21)
Project.create(title: "Project: Rad", description: "One Rad Project that combines all the awesome projects into one.", user_id: 1)
Step.create(project_id: 1, title: 'Acquire materials', body: 'some filler text should go here', step_index: 0)
Step.create(project_id: 1, title: 'use amterials', body: 'some filler text should go here!!!!!', step_index: 1)
Project.create(title: "Basket Weaving", description: "A tutorial about basketweaving for the uninitiated. Now wait! Before you say' why would i ever need to learn how to basket weave', its not a very useful trait, i ask you when is a basket not handy?", user_id: 1)
Step.create(project_id: 2, title: 'Acquire materials', body: 'find a suitable material that you wish to create a basket from. I shall be using fiberglass to create a sturdy basket', step_index: 0)
Step.create(project_id: 2, title: 'Weave it up!', body: 'Assuming you know basic weavmenship, this should be a sinch as I forgot to mention this is an advanced tutorial for master weavesmen, meaning this step is self explainatory', step_index: 1)
# Project.create(title: "DIY: Book", description: "Create a custom book with these materials.", user_id: 1)
# Project.create(title: "Table Adventures", description: "Dungeons and Dragons table build guide.", user_id: 2)
# Project.create(title: "Walking Coral", description: "COOORAAAAAAAAAAL.", user_id: 3)
# Project.create(title: "Kenta needs kelp!", description: "Ahh! Cave bats!.", user_id: 3)
# Project.create(title: "Gameboy Hoodie", description: "Fits XL Gameboys.", user_id: 4)