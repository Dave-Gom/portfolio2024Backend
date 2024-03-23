import { Router } from 'express';
import { LoginController, RegisterController } from '../database/controllers/authController';

const router = Router();

router.post('/login', LoginController);
router.post('/register', RegisterController);

export { router };
