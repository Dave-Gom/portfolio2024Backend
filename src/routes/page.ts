import { Router } from 'express';
import { readPages, readpageById } from '../database/controllers/pageController';

const router = Router();

router.get('/', readPages);
router.get('/:id', readpageById);

export { router };
