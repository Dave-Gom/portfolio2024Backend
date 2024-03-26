import { Router } from 'express';

import {
    addToSection,
    createTitle,
    deletTitle,
    readTitleById,
    readTitles,
    updateTitle,
} from '../database/controllers/titleController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readTitles);
router.get('/:id', readTitleById);
router.post('/', checkSession, createTitle);
router.put('/:id', checkSession, updateTitle);
router.delete('/:id', checkSession, deletTitle);
router.put('/addToSection/:sectionId', checkSession, addToSection);

export { router };
