import Budget from '../mongodb/models/budget.js';
import BudgetStats from '../mongodb/models/budgetStats.js';


/* Get all budget details that the user has created */
const getAllBudgets = async (req, res) => {
    try {   
        const { userId } = req.body;
        const budgets = await Budget.find({ userId: userId });
        if(budgets) 
            return res.status(200).json( { message: budgets } ) ;
        else
            return res.status(500).json( {message: 'No Budgets found'} );
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });  
    }
};

/* Create a new budget for the user */
const createBudget = async (req, res) => {
    try {
        const { category, description, currentAmount, maxAmount, userId } = req.body;
        /* Create a new budget in database */
        const newBudget = await Budget.create({
            category,
            description,
            currentAmount,
            maxAmount,
            userId
        });
        /* Update budget stats of user */
        const updatedBudget = await BudgetStats.findOneAndUpdate(
            { userId: userId },
            {   
                $inc: {
                    amountBudgeted: maxAmount,
                    amountSpent: currentAmount,
                    amountRemaining: maxAmount - currentAmount
                }
            },
            { upsert: true, new: true }
        )
        const budgetId = newBudget._id;
        res.status(200).json({ message: budgetId });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: error.message })   
    }
};

const deleteBudget = async (req, res) => {
    try {
        const { userId } = req.body;
        /* Delete budgets that have exceeded their amounts */
        const deletedBudget = await Budget.deleteMany({
            userId: userId,
            $expr: { $gt: ["$currentAmount", "$maxAmount"] }
        });
        
        res.status(200).json({ message: deletedBudget });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


export {
    getAllBudgets,
    createBudget,
    deleteBudget
}