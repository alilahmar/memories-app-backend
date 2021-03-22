import express, { Router } from 'express'
import postsController from '../controllers/postsController.js'

const router = Router()


router.get('/', postsController.getPosts)
router.post('/', postsController.savePost)
router.patch('/:id/edit', postsController.editPost)
router.delete('/:id/delete', postsController.deletePost)

export default router