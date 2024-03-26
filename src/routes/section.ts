import { Router } from 'express';
import {
    addText,
    createSection,
    deleteSection,
    readSectionById,
    readSections,
    updateSection,
} from '../database/controllers/sectionController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readSections);
router.get('/:id', readSectionById);
router.post('/', checkSession, createSection);
router.put('/:id', checkSession, updateSection);
router.delete('/:id', checkSession, deleteSection);
router.put('/addText/:textId', checkSession, addText);

export { router };
