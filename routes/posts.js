import express, { Router } from 'express'
import { posts } from '../controllers/postsController.js'

const router = Router()

router.get('/', posts.getPosts)
router.get('/:id', posts.getPost)
router.get('/:id', posts.getPosts)
router.post('/', posts.savePost)
router.patch('/:id/edit', posts.editPost)
router.delete('/:id/delete', posts.deletePost)
router.post('/:postId/comments', posts.addComment)




export default router