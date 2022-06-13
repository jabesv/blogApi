const express = require('express')
require('dotenv').config()  // init dotenv


const app = express()
const PORT = 5002


//* Middlewares



//* Routers










app.listen(PORT, () => {
    console.log(`Sever is running on port: ${PORT}`)
    
})