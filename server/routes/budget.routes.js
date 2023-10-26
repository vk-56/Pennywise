import express from 'express';

// Importing controllers
import {
    getAllBudgets,
    createBudget,
    deleteBudget
} from '../controllers/budget.controller.js';

const router = express.Router();

router.route('/createBudget').post(createBudget);
router.route('/getBudget').post(getAllBudgets);
router.route('/deleteBudget').post(deleteBudget);

export default router;