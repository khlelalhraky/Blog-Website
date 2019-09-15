const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const Users = require("../models/users");

router.post(
  "/register",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("Username can't be empty"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email can't be empty"),
    check("email")
      .isEmail()
      .withMessage("this is not valid Email"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Passwprd can't be empty")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

    try {
      const validEmail = await Users.findOne({ email: req.body.email });
      if (validEmail) {
        res.status(400).json({ errors: "this email is not valid" });
      } else {
        const user = new Users();
        const password = await user.passwordHash(req.body.password);

        user.email = req.body.email;
        user.username = req.body.username;
        user.password = password;

        const save = await user.save();
        if (!save) {
          res.status(400).json({
            errors: "ther is an Error in the server please try letter"
          });
        } else {
          console.log(save);
          res.status(200).json({ success: "Welcome you can login now" });
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
);

router.post(
  "/login",
  [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email can't be empty"),
    check("email")
      .isEmail()
      .withMessage("this is not valid Email"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Passwprd can't be empty")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(422).json({ errors: errors.array() });

    try {
      const user = await Users.findOne({ email: req.body.email });
      if (user) {
        const validPassword = await user.passwordCompare(
          req.body.password,
          user.password
        );
        if (validPassword) {
          res.status(200).json({ user: user.toAuthJSON() });
        } else {
          res.status(402).json({ errors: "this Password is not valid" });
        }
      } else {
        res.status(402).json({ errors: "this email is not valid" });
      }
    } catch (err) {
      console.log(err);
    }

    res.status(200);
  }
);

module.exports = router;
