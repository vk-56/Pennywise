import express from 'express';

// Importing controllers
import {
    getAllUsers,
    getUserInfoById,
    createUser
} from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoById);

export default router;