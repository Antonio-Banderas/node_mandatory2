import { Router } from "express";
import { ObjectId } from "mongodb";
import db from "../database/createConnection.js"

const adminRouter = Router();

// --- middleware to check for authorization --- //
adminRouter.use((req, res, next) => {
    if (req.session.authenticated) next();
    else {
        res.sendStatus(401);
    }
});

// --- get all emails --- //
adminRouter.get("/getEmails", async (req, res) => {
    const emailsfromDB = await db.emails.find().toArray()

    const emailsToFrontend = []
    emailsfromDB.forEach((item) => {
        emailsToFrontend.push(item.email)
    })
    res.send({data: emailsToFrontend})
})

// --- delete all emails --- //
adminRouter.delete("/deleteEmails", async (req, res) => {
    db.emails.deleteMany()
    res.sendStatus(200)
})

export { adminRouter }