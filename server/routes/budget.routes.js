import express from 'express';

// Importing controllers
import {
    getAllBudgets,
    createBudget,
    updateBudget,
    deleteBudget
} from '../controllers/budget.controller.js';

const router = express.Router();

router.route('/createBudget').post(createBudget);
router.route('/getBudget').post(getAllBudgets);

router.route('/').patch(updateBudget);
router.route('/').delete(deleteBudget);

export default router;