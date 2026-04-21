import express from 'express';
import { registerUser, loginUser, getProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/profile').get(protect, getProfile).put(protect, updateUserProfile);

export default router;
