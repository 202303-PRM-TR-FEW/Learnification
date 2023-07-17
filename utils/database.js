import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set("strictQuery", true)
    if (isConnected) {
        console.log("mongo db is already connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "learnu",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
        console.log("mongo db is connected") 
    }
    catch (err) {
        console.log(err) 
    }

}