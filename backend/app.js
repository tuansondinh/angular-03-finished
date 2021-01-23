const express = require('express');

const app = express();



app.use('/api/posts',(req, res, next) => {
    const posts = [
        {
            id:'fadf21fasdf',
             title:"first post", 
             content: "this is coming from server"
        },
        {
            id:'fadf2sdfsdfsf',
             title:"second post", 
             content: "this is coming from server"
        },
    ]
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    })
})

module.exports = app;