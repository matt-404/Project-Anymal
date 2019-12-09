# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create({
  username: 'Admin',
  password: '12346'
})

Category.create(title: 'Dogs', user_id: 1)
Post.create(title: 'This doggo is great', image_url: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg', category_id: 1, user_id: 1)
Post.create(title: 'Woof woof', image_url: 'https://blog.mystart.com/wp-content/uploads/shutterstock_224423782-1-e1527774744419.jpg', category_id: 1, user_id: 1)

Category.create(title: 'Cats', user_id: 1)
Post.create(title: 'Sleepy cat', image_url: 'https://cdn1.tedsby.com/tb/large/storage/1/9/4/194927/cute-handmade-cat-cats-collection.jpg', category_id: 2, user_id: 1)
Post.create(title: 'Praying cat', image_url: 'http://images6.fanpop.com/image/photos/33400000/Cute-Cats-cats-33440930-1280-800.jpg', category_id: 2, user_id: 1)
