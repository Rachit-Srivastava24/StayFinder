const express = require("express");
const router = express.Router();
const User = require("../Models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const userCOntroller = require("../controllers/users.js");

// SIGNUP
router.route("/signup")
.get(userCOntroller.renderSignupForm)
.post(wrapAsync (userCOntroller.signup));

// LOGIN

router.route("/login")
.get(userCOntroller.renderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
  }),
 userCOntroller.login
);

// LOGOUT
router.get("/logout",userCOntroller.logout);

module.exports = router;
