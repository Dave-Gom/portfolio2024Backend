import { Router } from 'express';

import {
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

export { router };
