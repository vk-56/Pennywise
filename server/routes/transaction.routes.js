import express from 'express';

// Importing controllers
import {
    createTransaction,
    getAllTransactions
} from '../controllers/transaction.controller.js';

const router = express.Router();

router.route('/createTransaction').post(createTransaction);
router.route('/getTransaction').post(getAllTransactions);

export default router;