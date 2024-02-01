import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongoDB;