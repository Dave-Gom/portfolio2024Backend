import { Router } from 'express';
import { createPage, deletePage, readPages, readpageById, updatePage } from '../database/controllers/pageController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readPages);
router.get('/:id', readpageById);
router.post('/', checkSession, createPage);
router.put('/', checkSession, updatePage);
router.delete('/', checkSession, deletePage);

export { router };
