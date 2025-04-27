import mongoose from "mongoose"
mongoose.set("strictQuery", true);


const connectDB = async () => {
    return await mongoose.connect(process.env.MONGO_URL);
}

export default connectDB