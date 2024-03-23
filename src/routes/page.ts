import { Router } from 'express';
import { readPages, readpageById } from '../database/controllers/pageController';
import { checkSession } from '../database/middlewares/auth';

const router = Router();

router.get('/', readPages);
router.get('/:id', readpageById);
router.post('/', checkSession, readpageById);

export { router };
