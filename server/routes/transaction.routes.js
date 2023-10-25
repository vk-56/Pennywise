import express from 'express';

// Importing controllers
import {
    createTransaction,
    getAllTransactions,
    getAllTransactionsByMonth
} from '../controllers/transaction.controller.js';

const router = express.Router();

router.route('/createTransaction').post(createTransaction);
router.route('/getTransaction').post(getAllTransactions);
router.route('/getTransactionMonthly').post(getAllTransactionsByMonth);

export default router;