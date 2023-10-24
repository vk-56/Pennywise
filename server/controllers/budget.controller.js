import User from '../mongodb/models/user.js';
import Budget from '../mongodb/models/budget.js';

const getAllBudgets = async (req, res) => {
    try {   
        const { userId } = req.body;
        const budgets = await Budget.find({ userId: userId });
        if(budgets) 
            return res.status(200).json( { message: budgets } ) ;
        else
            return res.status(500).json( {message: 'No Budgets found'} )
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message })  
    }
};

const createBudget = async (req, res) => {
    try {
        const { category, description, currentAmount, maxAmount, userId } = req.body;
        const newBudget = await Budget.create({
            category,
            description,
            currentAmount,
            maxAmount,
            userId
        })
        
        const budgetId = newBudget._id;
        res.status(200).json({ message: budgetId });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message })   
    }
};

const updateBudget = async (req, res) => {};
const deleteBudget = async (req, res) => {};

export {
    getAllBudgets,
    createBudget,
    updateBudget,
    deleteBudget
}