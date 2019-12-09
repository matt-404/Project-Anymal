# AnyMal

AnyMal is an image-sharing site where users can upload images of animals. The site will have sub-domains created by users that will be the categories of animals.
# Feature List
## MVP
* Register/Login
* Users can upload images
* Users can create categories

## Post-MVP

* Users can comment on images
* Users can like images
* Users can have avatars/have an 'animal badge'.

# ERD
![ERD](https://res.cloudinary.com/v3rymatt/image/upload/v1575327562/Project%20wireframes/AnyMal/AnyMal_ERD_r9sv7d.png)
# Wireframe
![RegisterWF](https://res.cloudinary.com/v3rymatt/image/upload/v1575304562/Project%20wireframes/AnyMal/AnyMal_register_vrimxq.png)
![LoginWF](https://res.cloudinary.com/v3rymatt/image/upload/v1575304564/Project%20wireframes/AnyMal/AnyMal_login_kpamjc.png)
![HomeWF](https://res.cloudinary.com/v3rymatt/image/upload/v1575305499/Project%20wireframes/AnyMal/AnyMal_home_xxygxh.png)
![UserPostWF](https://res.cloudinary.com/v3rymatt/image/upload/v1575304560/Project%20wireframes/AnyMal/AnyMal_single_post_leyi1i.png)
# Component Heirarchy

	<App/>
 	<Header/>
   	 <UserProfile/>
      <LoginForm/><RegisterForm/>
 	<Main/>
  	 <Categories/>
   	  <UserCategory/>
   	    <CategoryForm/>
        <Posts/>
          <UserPost/>
           <PostForm/>
           <Comments/>
 	<Footer/>
# Endpoints


| Endpoint                          | Purpose                  |
| --------------------------------- | -------------------------|
| /category                         | User can create category |
| /register                         | Register                 |
| /login                            | Login                    |
| /user/:user_id                    | User profile             |
| /''/:category_title               | User selected category   |
| /''/:category\_title/:post_id     | User selected post       |
| /''/:category\_title/create_post  | User creates post        |
 
# Dependencies

## Front-End

* React
* Axios
* React-Router

## Back-End
* Ruby on Rails

# Time frames

|   Component   | Priority | Estimated Time | Time Invested | Actual Time |
| ------------- | -------- | -------------- | ------------- |------------ |
| UserProfile   | H        |  4h
| LoginForm     | H        |  2h
| RegisterForm  | H        |  2h  
| Categories    | H        |  4h
| UserCategory  | H        |  3h
| CategoryForm  | H        |  3h
| Posts         | M        |  2h
| UserPost      | M        |  3h
| PostForm      | M        |  3h
| Comments      | L        |  4h
