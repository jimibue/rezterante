# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

menu1 = Menu.create(name: "Breakfast")

menu1.items.create(name: "Eggs", price: 3.95)
menu1.items.create(name: "Cakes", price: 5.95)
menu1.items.create(name: "yogurt", price: 4.95)

menu2 = Menu.create(name: "Dinner")

menu2.items.create(name: "Steak", price: 13.95)
menu2.items.create(name: "Salad", price: 6.95)
menu2.items.create(name: "Chicken", price: 8.95)

puts "db seeded"

puts Menu.all.size
