import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema({
    difficulty: { type: String, required: true},
    description: { type: String, required: true},
    coinValue: { type: Number,  required: true},
})

const challengeModel = mongoose.model('Challenge', ChallengeSchema);

export default challengeModel;