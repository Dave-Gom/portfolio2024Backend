import { Router } from 'express';
import {
    addImage,
    addText,
    addTitle,
    addToPage,
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
router.put('/addTitle/:titleId', checkSession, addTitle);
router.put('/addImage/:imageId', checkSession, addImage);
router.put('/addToPage/:pageId', checkSession, addToPage);

export { router };
