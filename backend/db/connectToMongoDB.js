import mongoose from "mongoose"; 

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected Successfully to MongoDB");
    } catch (error) {
        console.log("Failed to connect to MongoDB",error);
    }
}

export default connectToMongoDB;