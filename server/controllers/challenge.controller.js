import Challenge from '../mongodb/models/challenge.js';

const getAllChallenges = async (req, res) => {
    try {
        const allChallenges = [];
        const easyChallenges = await Challenge.find({ difficulty: "easy"}).limit(6);
        const mediumChallenges = await Challenge.find({ difficulty: "medium"}).limit(6);
        const hardChallenges = await Challenge.find({ difficulty: "hard"}).limit(6);
        allChallenges.push(easyChallenges);
        allChallenges.push(mediumChallenges);
        allChallenges.push(hardChallenges);

        if (allChallenges.length > 0) {
            return res.status(200).json({ message: allChallenges });
        } else {
            return res.status(200).json({ message: 'Challenges not found' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

export { getAllChallenges };