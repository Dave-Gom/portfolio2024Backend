import { Router } from 'express';
import {
    createImage,
    deletImage,
    readImageById,
    readImages,
    updateImage,
} from '../database/controllers/imageController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readImages);
router.get('/:id', readImageById);
router.post('/', checkSession, createImage);
router.put('/:id', checkSession, updateImage);
router.delete('/:id', checkSession, deletImage);

export { router };
