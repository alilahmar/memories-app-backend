import express from 'express'
import posts from './routes/posts.js'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/posts', posts)


mongoose.connect('mongodb://localhost/mymemories')
    .then(() => {
        console.log('DB connected')
        app.listen(5000, () => console.log('server started'))
    })
    .catch(err => console.log(err))
