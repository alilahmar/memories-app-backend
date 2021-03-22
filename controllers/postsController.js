import mongoose from 'mongoose'
import Post from '../model/Post.js'

export default {
    getPosts: async function (req, res) {
        try {
            const posts = await Post.find({})
            if (posts.length > 0) return res.status(200).json(posts)
        } catch (err) {
            res.json({ message: err })
        }
    },

    savePost: async function (req, res) {
        const newpost = new Post(req.body)
        try {

            await newpost.save()
            res.status(200).json(newpost)
        } catch (err) {
            res.json({ message: err })
        }
    },

    editPost: async function (req, res) {
        const { id } = req.params
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) return
            const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true })
            res.json(updatedPost)
        } catch (err) {

            res.json({ message: err })
        }
    },

    deletePost: async function (req, res) {
        const { id } = req.params
        try {
            if (!mongoose.Types.ObjectId(id)) return
            await Post.findByIdAndRemove(id)
            res.json({ message: 'Post deleted successfully' })
        } catch (err) {
            res.json({ message: err })
        }
    },

}