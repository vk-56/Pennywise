import User from '../mongodb/models/user.js';
import Budget from '../mongodb/models/budget.js';

const getAllUsers = async (req, res) => {};
const getUserInfoById = async (req, res) => {};
const createUser = async (req, res) => {
    try {
        const { userName, email, password, avatar, coinBalance } = req.body;

        const userExists = await User.findOne({ email });

        if(userExists) return res.status(200).json(userExists);

        const newUser = await User.create({
            userName,
            email,
            password,
            avatar,
            coinBalance, 
            dailyChallenges: [],
            allBudgets: [],
            allTransactions: [],
        })
        
        res.status(200).json(newUser);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message })   
    }

};

export {
    getAllUsers,
    getUserInfoById,
    createUser
}
