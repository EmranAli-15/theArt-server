import express from "express";
const router = express.Router();
import { getDB } from "../db/dbConnection.js";

router.get('/allClasses', async (req, res) => {
    const db = await getDB();

    const classes = await db.collection("classes").find().toArray();

    return res.send(classes);
});

export const classesRoutes = router