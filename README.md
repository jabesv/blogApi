# BlogAppAPI

This project is a blog API with a serie of functions available to the users where they can enter by registering and after that, the user can read, create, update and delete blogs (posts).

The API is based on two Schemas to make a dinamic interaction of the variables providing a token that brings security to the blogs and users id's. 
At the registration of the user the app requires a unique username and email, plus a password that has a minimum of 6 characters.  


---
## Tech 

This API was developed on NodeJS. 
Using Postman as platform to test and iterate with the BlogAppAPI that storages the users info and blogs in a MongoDB database in the cloud.

Server: Node, Express

Database: MongoDB

Tools: Postman


## Enviroment Variables

To run this project you will need to add the following variables to your .env file:

- MONGODB_URI
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

User('/users') Provides the functionality to create new users validating the username, email and password.
 
Auth('/auth') Allows the users to login. Checks the username and password, also creates a user id and a token to grant the user the possibility to create, read, update and delete posts.   

Blogs('/blogs') 
- app.use('/users') Allows to create new users, involving  
userSchema and hashing the password.  

- app.use('/auth', authRouter)

- app.use('/blogs', blogsRouter) 



Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build