import { getUser, createUser } from "../db/query.js";
import passport from "passport";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

let role = "USER";

const signUpPage = (req, res) => res.render("sign-up", { errors: [] });

const signUpPost = async (req, res, next) => {

  // Get validation result and log to the user
  let errors = validationResult(req).array();
  const userExist = await getUser(req.body.username);

  if (req.body.password !== req.body.confirmPassword) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (userExist) {
    userExist.name === req.body.username
      ? errors.push({ msg: "Username is taken" })
      : errors;
  }

  if (!(errors.length === 0)) {
    return res.status(400).render("sign-up", { errors });
  }

  if (req.body.adminPasscode === process.env.ADMIN_PASSCODE) role = "ADMIN";

  // Insert User into DB and authenticate
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    await createUser(req.body.username, hashedPassword, role);
    passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/sign-up",
    })(req, res, next);
  } catch (err) {
    return err;
  }
};

export { signUpPage, signUpPost };
