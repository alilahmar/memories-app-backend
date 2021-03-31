import mongoose from 'mongoose'
import Post from '../model/Post.js'
import Comment from '../model/Comment.js'

export const posts = {
    getPosts: async function (req, res) {
        try {
            const posts = await Post.find().populate('comments')
            if (posts.length > 0) return res.status(200).json(posts)
        } catch (err) {
            res.json({ message: err })
        }

    },

    getPost: async function (req, res) {
        const { id } = req.params
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) return
            const post = await Post.findById(id).populate('comments')
            return res.status(200).json(post)
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

            res.status(400).json({ message: err.message })
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

    getSinglePost: async function (req, res) {
        const { id } = req.params

        try {
            if (!mongoose.Types.ObjectId(id)) return
            const post = await Post.findById(id)
            res.status(200).json(post)
        } catch (err) {
            res.json({ message: err })
        }
    },
    addComment: async function (req, res) {
        const { body } = req.body;
        const newComment = new Comment({ body })
        const { postId } = req.params;
        try {
            const comment = await newComment.save()
            if (!mongoose.Types.ObjectId(postId)) return
            const post = await Post.findById(postId).populate('comments');
            post.comments.unshift(comment);
            await post.save()
            res.status(200).json(post)
        } catch (err) {
            res.json({ message: err.message });
        }

    }
}