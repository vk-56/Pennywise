import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true},
    allChallenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }],
    allBudgets: [{ type: mongoose.Schema.Types.ObjectId, red: 'Budget'}],
})

const userModel = mongoose.model('User', UserSchema);

export default userModel;