const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')

// @desc    Get posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find()

    res.json(posts)
})

const getPost = asyncHandler(async (req, res) => {
    // const post = await Post.findById(req.params.id)
    const titleDelinked = req.params.id.replaceAll("-", " ")
    const post = await Post.findOne({title: titleDelinked})

    res.json(post)
})


const setPost = asyncHandler(async (req, res) => {
    console.log(req.body)

    const post = await Post.create({
        title: req.body.title,
        text: req.body.text,
        content: req.body.content
    })

    res.json(post)
})

const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error("Post not found")
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body)

    res.json(updatedPost)
})

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    const removedPost = await post.remove()

    res.json({id: req.params.id})
})

module.exports = {
    getPost,
    getPosts,
    setPost,
    updatePost,
    deletePost
}