import express from 'express';

// Importing controllers
import {
    getUserInfo,
    createUser,
    getUserNameById,
    getContactById,
    getLocationById,
} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/login').post(getUserInfo);
router.route('/signup').post(createUser);
router.route('/getUsername').post(getUserNameById);
router.route('/getLocation').post(getLocationById);
router.route('/getContact').post(getContactById);

export default router;