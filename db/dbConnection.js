import dotenv from "dotenv";
dotenv.config();

import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

export const connectToDB = async () => {
    try {
        await client.connect();
        db = client.db("summer-vacation");
        console.log("Connected to MongoDB ✅");
    } catch (err) {
        console.error("Database connection failed ❌");
    }
}

export const getDB = () => {
    if (!db) throw new Error("DB not initialized. Call connectToDB first ❌");
    return db;
}