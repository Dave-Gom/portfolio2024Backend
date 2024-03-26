import { Router } from 'express';
import {
    addToSection,
    createText,
    deletText,
    readTextById,
    readTexts,
    updateText,
} from '../database/controllers/textController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readTexts);
router.get('/:id', readTextById);
router.post('/', checkSession, createText);
router.put('/:id', checkSession, updateText);
router.delete('/:id', checkSession, deletText);
router.put('/addToSection/:sectionId', checkSession, addToSection);

export { router };
