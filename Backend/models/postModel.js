const mongoose = require('mongoose')

// The idea is to but content breaks into the text and insert the content at each break. Almost always http links
// Ex. Hello in this video ?FLAG? I will be discussing this diagram ?FLAG?
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title needed"]
    },
    text: {
        type: String,
        required: true
    },
    content: [{
        type: String,
        link: String
    }]   
}, {
    timestamps: true
})

module.exports = mongoose.model('post', postSchema)