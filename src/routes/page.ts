import { Router } from 'express';
import { readPages } from '../database/controllers/pageController';

const router = Router();

router.get('/', readPages);

export { router };
