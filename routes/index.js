import { Router } from "express";
import { signUpPage, signUpPost } from "../controller/signup.js";
import { body } from "express-validator";

const indexRouter = Router();

indexRouter.get("/sign-up", signUpPage);
indexRouter.get("/", signUpPage);
indexRouter.post(
  "/sign-up",
  body("username").escape(),
  body("username").trim().notEmpty().withMessage("Username must not be empty"),
  body("password").notEmpty().withMessage("Password must not be empty"),
  body("password").escape(),
  body("confirmPassword").notEmpty().withMessage("Password must not be empty"),
  body("confirmPassword").escape(),
  signUpPost,
);

export { indexRouter };
