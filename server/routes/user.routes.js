import express from 'express';

// Importing controllers
import {
    getUserInfo,
    createUser
} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/login').post(getUserInfo);
router.route('/signup').post(createUser);

export default router;