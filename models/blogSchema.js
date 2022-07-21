const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    created_by: {
        type: String,
        // required: true
    },

    created_at: {
        type: Date,
        default: Date.now()
    },
    title: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    private: {
        type: Boolean,
       default: false
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Blog', blogSchema)