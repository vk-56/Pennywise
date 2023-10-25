import mongoose from "mongoose";

const RewardSchema = new mongoose.Schema({
    description: { type: String, required: true},
    coinValue: { type: Number,  required: true},
})

const rewardModel = mongoose.model('Reward', RewardSchema);

export default rewardModel;