import mongoose from 'mongoose'
const { Schema } = mongoose

const commentSchema = new Schema({
    body: { type: String, required: true }
}, { timestamps: { createdAt: 'created_at' } })


export default mongoose.model('Comment', commentSchema)