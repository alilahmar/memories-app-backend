import mongoose from 'mongoose'
const { Schema } = mongoose

const commentSchema = new Schema({
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })


export default mongoose.model('Comment', commentSchema)