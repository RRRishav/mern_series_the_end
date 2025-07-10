const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const {validate} = require("../middlewares/validators");
const {signupSchema} = require("../validators/auth-validator.js");

router.route("/").get(authcontrollers.Home);

router.route("/login").post(authcontrollers.login);



router.route("/register").post(validate(signupSchema)  ,authcontrollers.register);



module.exports = router;
