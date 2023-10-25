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
        const transactions = await Transaction.find({ userId: userId })
            .sort({ date: -1 })  // Sort by date in descending order (most recent first)
            .limit(3);           // Limit the results to 3 transactions

        if (transactions.length > 0) {
            // Convert date strings to date objects
            transactions.forEach(transaction => {
                transaction.date = new Date(transaction.date);
            });

            return res.status(200).json({ message: transactions });
        } else {
            return res.status(200).json({ message: 'No recent transactions found' });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

const getAllTransactionsByMonth = async (req, res) => {
    try {
        const { userId } = req.body;
        // Retrieve all transactions for the given user and month (e.g., October)
        const octTransactions = await Transaction.find({
            userId: userId,
            date: /Oct/i, // Use a case-insensitive regular expression to match 'Oct' in the date field
        }, 'date amount');

        if (octTransactions.length === 0) {
            return res.status(200).json({ message: 'No transactions with "Oct" found' });
        }

        // Process the data to combine transactions by date
        const aggregatedTransactions = {};
        octTransactions.forEach(transaction => {
            const date = transaction.date;

            if (aggregatedTransactions[date]) {
                aggregatedTransactions[date].totalAmount += transaction.amount;
            } else {
                aggregatedTransactions[date] = {
                    date,
                    totalAmount: transaction.amount
                };
            }
        });
        const result = Object.values(aggregatedTransactions);

        return res.status(200).json({ message: result });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

const getAllTransactionsByCategory = async (req, res) => {
    try {
        const { userId } = req.body;
        // Retrieve all transactions for the given user and month (e.g., October)
        const octTransactions = await Transaction.find({
            userId: userId,
            date: /Oct/i, // Use a case-insensitive regular expression to match 'Oct' in the date field
        }, 'category amount');

        if (octTransactions.length === 0) {
            return res.status(200).json({ message: 'No transactions with "Oct" found' });
        }

        // Process the data to combine transactions by category
        const aggregatedTransactions = {};
        octTransactions.forEach(transaction => {
            const category = transaction.category;

            if (aggregatedTransactions[category]) {
                aggregatedTransactions[category].totalAmount += transaction.amount;
            } else {
                aggregatedTransactions[category] = {
                    category,
                    totalAmount: transaction.amount
                };
            }
        });
        
        const result = Object.values(aggregatedTransactions);

        return res.status(200).json({ message: result });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

export {
    createTransaction,
    getAllTransactions,
    getAllTransactionsByMonth,
    getAllTransactionsByCategory,
}
