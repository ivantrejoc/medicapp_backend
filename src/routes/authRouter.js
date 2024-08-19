import { Router } from "express";
import { signInHandler, signOutHandler } from "../handlers/authHandlers.js";

const authRouter = Router();

authRouter.post("/signin", signInHandler);
authRouter.post("/signout", signOutHandler);

export default authRouter;