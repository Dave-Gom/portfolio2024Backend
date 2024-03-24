import { Router } from 'express';
import { createPage, deletePage, readPages, readpageById, updatePage } from '../database/controllers/pageController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readPages);
router.get('/:id', readpageById);
router.post('/', checkSession, createPage);
router.put('/:id', checkSession, updatePage);
router.delete('/:id', checkSession, deletePage);

export { router };
