const express = require("express");
const dotenv = require('dotenv').config()   // Allows us to store and access enviroment files
const port = process.env.PORT || 5000

const app = express()

app.get('/api/posts', (req, res) => {
    res.json({"id": 1, "title": "Hello!!!"})
})

app.listen(port, () => console.log(`Server started on port ${port}`))