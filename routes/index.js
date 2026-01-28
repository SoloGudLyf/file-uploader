import { Router } from "express";
import { signUpPage } from "../controller/signup.js";

const indexRouter = Router();

indexRouter.get("/home", signUpPage);
indexRouter.get("/", signUpPage);
export { indexRouter };
