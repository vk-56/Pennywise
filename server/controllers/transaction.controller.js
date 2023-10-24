import Transaction from '../mongodb/models/transaction.js';
import Budget from '../mongodb/models/budget.js';

const createTransaction = async (req, res) => {
    try {
        const { type, category, amount, date, userId } = req.body;
        const newTransaction = await Transaction.create({
            type,
            category,
            amount,
            date,
            userId
        })
        const transactionId = newTransaction._id;
        /* update budget current amount based on user id and category of transaction */
        const updateResult = await Budget.updateOne({
            "category": category,
            "userId": userId,
        }, {
            $inc: {
                "currentAmount": amount
            }
        });
        console.log('Update result:', updateResult);
        res.status(200).json({ message: transactionId });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message })   
    }
};

const getAllTransactions = async (req, res) => {
    try {   
        const { userId } = req.body;
        const transactions = await Transaction.find({ userId: userId });
        if(transactions) 
            return res.status(200).json( { message: transactions } ) ;
        else
            return res.status(500).json( {message: 'No Budgets found'} )
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message })  
    }
};

export {
    createTransaction,
    getAllTransactions
}
