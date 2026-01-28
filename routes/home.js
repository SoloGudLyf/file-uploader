import { Router } from "express";
import { homePage } from "../controller/home.js";

const homeRouter = Router();

homeRouter.get("/home", homePage);

export { homeRouter };
