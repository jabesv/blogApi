const jwt = require('jsonwebtoken')
const { resourceUsage } = require('process')

module.exports = (req, res, next) => {
    //get the token from the headers object
    const token = req.header('x-auth-token')

    // if No token
    if (!token) {
        return res.json('No token, Access denied!')
    }
    // if we have a token
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        console.log(decoded);

        next()
    } catch (error) {
        console.log(error);
        res.status(400).json('Token not valid')
    }
}