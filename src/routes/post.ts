import { Router } from 'express';

import {
    addImage,
    addText,
    addTitle,
    createPost,
    deletePost,
    readPostById,
    readPosts,
    updatePost,
} from '../database/controllers/postController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readPosts);
router.get('/:id', readPostById);
router.post('/', checkSession, createPost);
router.put('/:id', checkSession, updatePost);
router.delete('/:id', checkSession, deletePost);
router.put('/addText/:textId', checkSession, addText);
router.put('/addTitle/:titleId', checkSession, addTitle);
router.put('/addImage/:imageId', checkSession, addImage);

export { router };
