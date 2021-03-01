import express from 'express';
//import { getPosts } from '../controllers/posts.js';
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

/* router.get('/',(req, res) =>
{
    res.send('This works!');
}); */
//router.get('/',getPosts);

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;