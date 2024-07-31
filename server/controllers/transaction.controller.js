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

        // Define the start and end dates for July
        const startDate = new Date('2024-07-01T00:00:00Z'); // Start of July
        const endDate = new Date('2024-07-31T23:59:59Z'); // End of July

        console.log('Start Date:', startDate.toISOString());
        console.log('End Date:', endDate.toISOString());

        // Fetch transactions within the specified date range
        const transactions = await Transaction.find({
            userId: userId,
            date: {
                $gte: startDate,
                $lte: endDate,
            }
        }, 'date amount');

        console.log('Fetched Transactions:', transactions);

        if (transactions.length === 0) {
            return res.status(200).json({ message: 'No transactions found for July' });
        }

        // Aggregate transactions by date
        const aggregatedTransactions = {};
        transactions.forEach(transaction => {
            // Check if date is a Date object
            if (!(transaction.date instanceof Date)) {
                console.error('Date field is not a Date object:', transaction.date);
                return;
            }

            // Format the date to YYYY-MM-DD
            const formattedDate = transaction.date.toISOString().split('T')[0];
            if (aggregatedTransactions[formattedDate]) {
                aggregatedTransactions[formattedDate].totalAmount += transaction.amount;
            } else {
                aggregatedTransactions[formattedDate] = {
                    date: formattedDate,
                    totalAmount: transaction.amount
                };
            }
        });

        console.log('Aggregated Transactions:', aggregatedTransactions);

        const result = Object.values(aggregatedTransactions);

        return res.status(200).json({ message: result });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ message: error.message });
    }
};


/* Retrieve all transactions for the given month (e.g., October) category wise */
const getAllTransactionsByCategory = async (req, res) => {
    try {
        const { userId } = req.body;

        // Define the start and end dates for July
        const startDate = new Date('2024-07-01T00:00:00Z'); // Start of July
        const endDate = new Date('2024-07-31T23:59:59Z'); // End of July

        console.log('Start Date:', startDate.toISOString());
        console.log('End Date:', endDate.toISOString());

        const transactions = await Transaction.find({
            userId: userId,
            date: {
                $gte: startDate, // Start of October
                $lte: endDate, // End of October
            }
        }, 'category amount');

        if (transactions.length === 0) {
            return res.status(200).json({ message: 'No transactions with "July" found' });
        }

        // Process the data to combine transactions by category
        const aggregatedTransactions = {};
        transactions.forEach(transaction => {
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
