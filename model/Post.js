import mongoose from 'mongoose'
const { Schema } = mongoose

const postSchema = new Schema({
    creator: String,
    title: String,
    message: String,
    tags: [String],
    selectedFile: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true })


export default mongoose.model('Post', postSchema)