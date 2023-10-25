import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: false},
    email: { type: String, required: false},
    password: { type: String, required: false},
    avatar: { type: String, required: false},
    age: { type: Number , required: false},
    coinBalance: { type: Number, required: false},
    dailyChallenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'}],
    allBudgets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Budget'}],
    allTransactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}]
})

const userModel = mongoose.model('User', UserSchema);

export default userModel;