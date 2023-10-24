import User from '../mongodb/models/user.js';
import Budget from '../mongodb/models/budget.js';

const getUserInfo = async (req, res) => {
    try {   
        const { email, password } = req.body;
        const user = await User.findOne({
            $and: [
                { email: email },
                { password: password },
            ]
        });
        if(user) 
            return res.status(200).json( { message: user._id } ) ;
        else
            return res.status(500).json( {message: 'User not found'} )
        
    } catch (error) {
        
    }
};
const createUser = async (req, res) => {
    try {
        const { userName, email, password, avatar, coinBalance } = req.body;
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
        
        const userId = newUser._id;

        res.status(200).json({ message: userId });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message })   
    }

};

export {
    getUserInfo,
    createUser
}
