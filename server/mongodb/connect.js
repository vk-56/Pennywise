import mongoose from "mongoose";

const connectDB = (url) => {
    /* Set mode to strict queries only */
    mongoose.set('strictQuery', true);

    /* Connect to MongoDB */
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbname: 'PennyWiseDB'
    }).then( () => console.log('MongoDB connected')).catch( (error) => console.log(error));
}

export default connectDB;
