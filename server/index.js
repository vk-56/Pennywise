import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routes.js';
import budgetRouter from './routes/budget.routes.js';


dotenv.config();

/* Adding middleware */
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

/* Test route */
app.get('/', (req, res) => {
    res.send({ message: 'Hello World!'});
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/budgets', budgetRouter);

/* Start server */
const startServer = async () => {
    try {
        // Connect to database
        connectDB(process.env.MONGODB_URL);
        // Listen on port 8080
        app.listen(8080, () => console.log('Server started on port http://localhost:8080'));
    }
    catch (error) {
        console.log(error);
    }
}

startServer();