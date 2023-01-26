import express from "express";
import { sendMail } from "../util/nodemailer.js"
import db from "../database/createConnection.js"

const mailRouter = express.Router();

// --- store email in database & recieve email --- //
mailRouter.post("/sendEmail", async (req, res) => {
    const email = req.body.email
    db.emails.insertOne({ email })
    sendMail(email)
    res.sendStatus(202)
});


export { mailRouter };


