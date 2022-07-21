const express = require('express')
const BlogModel = require('../models/blogSchema')
const authMiddleware = require('../middleware/authMiddleware')

//* Create a Router
const router = express.Router()

//* GET BLOGS
router.get('/', authMiddleware, async (req, res) => {   //! add middleware before async
    try {
        const blogs = await BlogModel.find()
        res.status(200).json(blogs)
    } catch (error) {
        console.log(error);
    }
})

//* Create BLOGS
router.post('/',authMiddleware , async (req, res) => {  //! add middleware before async
    const blogData = req.body // gets the data from te request
    blogData.user = req.user.id 
    console.log(blogData)
    try {
        const blog = await BlogModel.create(blogData)  // create the blog in the db
        // send back the response
        res.status(201).json(blog)
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad request!!!')
    }
})

//* Get BLOG by Id
router.get('/:id', authMiddleware, async (req, res) => {   //! add middleware before async
    const id = req.params.id

    try {
        const blog = await BlogModel.findById(id)
        res.status(200).json(blog)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg: 'Id not found'
        })
    }
})

//* Update BLOG by ID
router.put('/:id', authMiddleware, async (req, res) => {  //! add middleware before async
    const id = req.params.id
    const newBlogData = req.body
    try {
        //* find the blog by the id
        const blog = await BlogModel.findByIdAndUpdate(id, newBlogData, {new: true})
        res.status(202).json(blog)
    } catch (error) {
        console.log(error)
    }
})

//! Delete a Blog
router.delete('/:id', authMiddleware , async (req, res) => {    //! add middleware before async
    const id = req.params.id
    try {
        const blog = await BlogModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Blog was deleted!'})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
