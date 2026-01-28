import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/home", homePage);
indexRouter.get("/", homePage);
export { indexRouter };
