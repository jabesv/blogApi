# BlogAppAPI

This project is a blog API with a serie of functions available to the users where they can enter by registering and after that, the user can read, create, update and delete blogs (posts).

The API is based on two Schemas to make a dinamic interaction of the variables providing a token that brings security to the blogs and users id's. 
At the registration of the user the app requires a unique username and email, plus a password that has a minimum of 6 characters.  


## Tech 

This API was developed on NodeJS. 
Using Postman as platform to test and iterate with the BlogAppAPI that storages the users info and blogs in a MongoDB database in the cloud.

Server: Node, Express

Database: MongoDB

Tools: Postman


## Enviroment Variables

To run this project you will need to add the following variables to your .env file:

- MONGODB_URI
- PORT=
- SECRET_KEY



### Run Locally 

Clone the project from:
https://github.com/jabesv/blogApi.git

Go to the project directory and install the following dependencies:

npm init -y

npm i :
    - bcrypy
    - dotenv
    - express
    - express-validator
    - helmet
    - jsonwebtoken
    - mongoose
    - morgan
    
Once you have installed the dependencies you may run the server.js file to test the API.
THe server is set to run in port: 5002

If the connection is made you should see the message: 
    Sever is running on port: 5002
    MongoDB Conected!


## Routes

Server.js provides the root route for the app which is : app.get('/') returning the message "Welcome to the BlogAPI".

The API is segmented in three routes:

- User('/users') Provides the functionality to create new users, validating the username, email and password.

This route is called as follows:
app.use('/users', usersRouter)
 

- Auth('/auth') Allows the users to login. Checks the username and password, also creates a user id and a token to grant the user the possibility to navigate the API and access the route Blogs and its functionalities.

This route is called as follows:
app.use('/auth', authRouter)

- Blogs('/blogs') The user after a successful login is authorized to create, read, read by id, update and delete blogs. This authorization consist in a token given by the system which will give access to the CRUD functions.

This route is called as follows:
app.use('/blogs', blogsRouter)

## Schemas

- User Schema:
    * username: string, required
    * email: string, required
    * birthday: date, required
    * age: number
    * password: string, required

- Blog Schema: 
    * created_by: string, required
    * created_at: date, default
    * blog_title: string, required
    * blog_content: string, required
    * private: boolean, default


## Middleware

Verifies if a token is being used at headers level. If there is no token the access is denied. If a token is available at headers, the middleware makes sure that the token matches, using the the enviromental variables in this security process. Once is clear the access the user can create, read, update and delete blogs. 
If the token doesn't match the following message is displayed: "Token not valid".


## Heroku
This API has been uploaded to Heroku.com where all the backend funtionality can be tested using Postman. 
https://jab-blog-api.herokuapp.com/



## Upcoming Features
- More routes:
  * to list all the users, 
  * to list private posts,
- Documentation with Suagger.  

=====================================================

Thank you for checking my Blog API.  