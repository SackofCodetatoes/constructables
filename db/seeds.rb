# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'demo', email: "demo@demo.com", password: 'password', age: 21)
User.create(username: 'Alfred', email: "demo2@demo.com", password: 'password', age: 21)
User.create(username: 'Nemo', email: "demo3@demo.com", password: 'password', age: 21)
User.create(username: 'Beemo', email: "demo4@demo.com", password: 'password', age: 21)
Project.create(title: "Project: Rad", description: "One Rad Project that combines all the awesome projects into one.", user_id: 1)
Project.create(title: "DIY: Book", description: "Create a custom book with these materials.", user_id: 1)
Project.create(title: "Table Adventures", description: "Dungeons and Dragons table build guide.", user_id: 2)
Project.create(title: "Walking Coral", description: "COOORAAAAAAAAAAL.", user_id: 3)
Project.create(title: "Kenta needs kelp!", description: "Ahh! Cave bats!.", user_id: 3)
Project.create(title: "Gameboy Hoodie", description: "Fits XL Gameboys.", user_id: 4)