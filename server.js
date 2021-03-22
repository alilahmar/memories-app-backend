import express from 'express'
import posts from './routes/posts.js'
import mongoose from 'mongoose'

const app = express()

app.use('/api/posts', posts)

mongoose.connect('mongodb://localhost/mymemories')
    .then(() => {
        console.log('DB connected')
        app.listen(5000, () => console.log('server started'))
    })
    .catch(err => console.log(err))
