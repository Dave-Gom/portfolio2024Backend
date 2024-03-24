import { Router } from 'express';
import { createText, deletText, readTextById, readTexts, updateText } from '../database/controllers/textController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readTexts);
router.get('/:id', readTextById);
router.post('/', checkSession, createText);
router.put('/:id', checkSession, updateText);
router.delete('/:id', checkSession, deletText);

export { router };
