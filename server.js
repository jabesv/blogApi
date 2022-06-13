const express = require('express')
require('dotenv').config()  // init dotenv
const morgan = require('morgan')
const helmet = require('helmet')

const mongoConfig = require('./config/mongoConfig')
const blogsRouter = require('./routes/blogsRouter')
const usersRouter = require('./routes/usersRouter')
const authRouter = require('./routes/authRouter')

const app = express()
const PORT = 5002


//* Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

//* Routers
//app.use('/blogs', blogsRouter)
//app.use('/users', usersRouter)
//app.use('/auth', authRouter)

//* Root route for the APP
app.get('/', (req, res) => {
    res.status(200).json('Welcome to the BlogAPI')
})


//* App Listener
app.listen(PORT, () => {
    console.log(`Sever is running on port: ${PORT}`)
    mongoConfig()
})