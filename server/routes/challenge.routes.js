import express from 'express';

// Importing controllers
import {
    getAllChallenges
} from '../controllers/challenge.controller.js';

const router = express.Router();

router.route('/getChallenge').get(getAllChallenges);

export default router;