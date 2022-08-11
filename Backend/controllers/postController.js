const asyncHandler = require('express-async-handler')

// @desc    Get posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
    res.json({"id": 1, "title": "Hello!!!"})
})

const setPost = asyncHandler(async (req, res) => {
    console.log(req.body)

    res.json({"id": 1, "title": "Hello!!!"})
})

const updatePost = asyncHandler(async (req, res) => {
    res.json({"id": 1, "title": "Hello!!!"})
})

const deletePost = asyncHandler(async (req, res) => {
    res.json({"id": 1, "title": "Hello!!!"})
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}