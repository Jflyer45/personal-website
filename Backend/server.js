const express = require("express");
const dotenv = require('dotenv').config()   // Allows us to store and access enviroment files
const port = process.env.PORT || 5000
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors')

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/posts", require("./routes/postRoutes"))

app.listen(port, () => console.log(`Server started on port ${port}`))