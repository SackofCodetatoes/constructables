# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'demo', email: "demo@demo.com", password: 'password', age: 21)
Project.create(title: "Project: Rad", description: "One Rad Project that combines all the awesome projects into one.", user_id: 1)
Project.create(title: "Table Adventures", description: "Dungeons and Dragons table build guide.", user_id: 1)