import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDB } from "./db/dbConnection.js";
import { classesRoutes } from "./routes/classes.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



// My all routes
app.use("/api/classes", classesRoutes);

app.get('/', (req, res) => {
    res.send('Server Is Running Now!!');
});






const startServer = async () => {
    try {
        await connectToDB();
        app.listen(port, () => {
            console.log(`🚀 Server running on port: ${port}`);
        });
    } catch (error) {
        console.error("❌ Failed to connect to DB:", error.message);
    }
};

startServer();
