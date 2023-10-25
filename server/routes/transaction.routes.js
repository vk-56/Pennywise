import express from 'express';

// Importing controllers
import {
    createTransaction,
    getAllTransactions,
    getAllTransactionsByMonth,
    getAllTransactionsByCategory
} from '../controllers/transaction.controller.js';

const router = express.Router();

router.route('/createTransaction').post(createTransaction);
router.route('/getTransaction').post(getAllTransactions);
router.route('/getTransactionMonthly').post(getAllTransactionsByMonth);
router.route('/getTransactionCategories').post(getAllTransactionsByCategory);

export default router;