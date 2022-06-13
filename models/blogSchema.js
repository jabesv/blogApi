const mongoose = require('mongoose')
const { stringify } = require('querystring')
const { boolean } = require('webidl-conversions')

const blogSchema = mongoose.Schema({
    created_by: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        required: true
    },
    blog_title: {
        type: String,
        required: true
    },

    blog_cotent: {
        type: String,
        required: true
    },

    private: {
        type: boolean,
        required: true
    }
})

module.exports = mongoose.model('Blog', blogSchema)