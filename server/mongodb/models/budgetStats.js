import mongoose from "mongoose";

const BudgetStatsSchema = new mongoose.Schema({
    amountBudgeted: { type: Number },
    amountSpent: { type: Number },
    amountRemaining: { type: Number },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const budgetStatsModel = mongoose.model('BudgetStats', BudgetStatsSchema);

export default budgetStatsModel;