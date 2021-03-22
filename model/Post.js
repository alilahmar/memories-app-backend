import mongoose from 'mongoose'
const { Schema } = mongoose

const postSchema = new Schema({
    creator: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    tags: [String],
    selectedFile: String
}, { timestamps: true })


export default mongoose.model('Post', postSchema)