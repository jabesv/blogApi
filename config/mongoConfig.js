const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        await mongoose.connection // checks if we have a connection
        console.log('MongoDB Conected!')
    } catch (error) {
        console.log(error)
        
    }
}