import mongoose from "mongoose";

export default async function connect() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        const connection = mongoose.connection;
        connection.on("connect", ()=>{
            console.log("Connected to MongoDB...");
        });
        connection.on("error", (error)=>{
            console.error("Error connecting to MongoDB: ", error);
            process.exit(1);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error); 
    }
}