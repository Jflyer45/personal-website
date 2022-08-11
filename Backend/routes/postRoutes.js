const express = require("express");
const router = express.Router()
const {getPosts, setPost, deletePost, updatePost} = require("../controllers/postController")

router.get('/', getPosts)

router.post('/', setPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)


module.exports = router