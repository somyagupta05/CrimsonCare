const express = require("express");
const {
  registerController,
  loginContoller,
} = require("../controllers/authController");
const router = express.Router();

// routes
// register || post

router.post("/register", registerController);

// login || post
router.post("/login", loginContoller);
module.exports = router;
