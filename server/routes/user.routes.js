import express from 'express';

// Importing controllers
import {
    getUserInfo,
    createUser,
    getUserNameById
} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/login').post(getUserInfo);
router.route('/signup').post(createUser);
router.route('/getUsername').post(getUserNameById);

export default router;