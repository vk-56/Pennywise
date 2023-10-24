import User from '../mongodb/models/user.js';
import Budget from '../mongodb/models/budget.js';

const getAllUsers = async (req, res) => {};
const getUserInfoById = async (req, res) => {};
const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });

        if(userExists) return res.status(200).json(userExists);

        const newUser = await User.create({
            email,
            password,
            allChallenges: [],
            allBudgets: [],
        })
        
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message })   
    }

};

export {
    getAllUsers,
    getUserInfoById,
    createUser
}
