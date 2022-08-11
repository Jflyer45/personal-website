const express = require("express");
const dotenv = require('dotenv').config()   // Allows us to store and access enviroment files
const port = process.env.PORT || 5000

const app = express()

app.use("/api/posts", require("./routes/postRoutes"))

app.listen(port, () => console.log(`Server started on port ${port}`))