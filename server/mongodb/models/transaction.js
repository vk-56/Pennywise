import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    type: { type: String, required: true},
    category: { type: String, required: true},
    amount: { type: Number, required: false},
    date: { type: Date,  required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const transactionModel = mongoose.model('Transaction', TransactionSchema);

export default transactionModel;