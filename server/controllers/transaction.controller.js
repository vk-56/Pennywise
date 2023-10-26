import Transaction from '../mongodb/models/transaction.js';
import Budget from '../mongodb/models/budget.js';

/* Create a new transaction document */
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
        /* Update budget's amount based on user id and category of transaction */
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
        console.error(error);
        res.status(500).json({ message: error.message })   
    }
};

/* Fetch 3 recent transactions of the user */
const getAllTransactions = async (req, res) => {
    try {   
        const { userId } = req.body;
        const transactions = await Transaction.find({ userId: userId }).sort({ date: -1 }).limit(3);           

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

/* Retrieve all transactions for the given user and month (e.g., October) */
const getAllTransactionsByMonth = async (req, res) => {
    try {
        const { userId } = req.body;
        const octTransactions = await Transaction.find({
            userId: userId,
            date: {
                $gte: new Date('2023-10-01'), // Start of October
                $lte: new Date('2023-10-31'), // End of October
            }
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
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
/* Retrieve all transactions for the given month (e.g., October) category wise */
const getAllTransactionsByCategory = async (req, res) => {
    try {
        const { userId } = req.body;
        
        const octTransactions = await Transaction.find({
            userId: userId,
            date: {
                $gte: new Date('2023-10-01'), // Start of October
                $lte: new Date('2023-10-31'), // End of October
            }
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
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export {
    createTransaction,
    getAllTransactions,
    getAllTransactionsByMonth,
    getAllTransactionsByCategory,
}
