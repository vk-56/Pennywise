import express from 'express';

// Importing controllers
import {
    getAllBudgets,
    getBudgetDetail,
    createBudget,
    updateBudget,
    deleteBudget
} from '../controllers/budget.controller.js';

const router = express.Router();

router.route('/').get(getAllBudgets);
router.route('/:id').get(getBudgetDetail);
router.route('/').post(createBudget);
router.route('/').patch(updateBudget);
router.route('/').delete(deleteBudget);

export default router;