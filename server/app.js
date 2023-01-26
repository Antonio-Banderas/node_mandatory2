import express from "express";
import path from "path";
import session from "express-session"
import cors from "cors";
import helmet from "helmet";
import { adminRouter } from "./routers/adminRouter.js";
import { loginRouter } from "./routers/loginRouter.js";
import { mailRouter } from "./routers/mailRouter.js";

const app = express();

app.use(express.json());
app.use(express.static(path.resolve("../client/dist")));
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors({ credentials: true, origin: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    httpOnly: false,
    sameSite: true,
    cookie: { secure: false }
}));

// -------- ROUTES --------- //
app.use('/admin', adminRouter)
app.use('/login', loginRouter)
app.use('/mail', mailRouter)

// ------- PORT ------- //
const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));