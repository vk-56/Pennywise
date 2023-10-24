import mongoose from "mongoose";

const BudgetSchema = new mongoose.Schema({
    category: { type: String, required: true},
    description: { type: String, required: true},
    currentAmount: { type: Number, required: false},
    maxAmount: { type: Number,  required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const budgetModel = mongoose.model('Budget', BudgetSchema);

export default budgetModel;