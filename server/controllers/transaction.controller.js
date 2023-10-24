import Transaction from '../mongodb/models/transaction.js';

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
