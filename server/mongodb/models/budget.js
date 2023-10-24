import mongoose from "mongoose";

const BudgetSchema = new mongoose.Schema({
    type: { type: String, required: true},
    category: { type: String, required: true},
    maxAmount: { type: Number,  required: true},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const budgetModel = mongoose.model('Budget', BudgetSchema);

export default budgetModel;