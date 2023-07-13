import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set("strictQuery", true)
    if (isConnected) {
        console.log("mongo db is already connected") // IF THE DB IS ALREADY CONNECTED, IT WILL NOT CONNECT AGAIN
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "learnu",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
        console.log("mongo db is connected") // LOGS THE CONNECTION INTO THE TERMINAL
    }
    catch (err) {
        console.log(err) // LOGS THE ERRORS INTO THE TERMINAL
    }

}