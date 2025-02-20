const express = require("express");
const {
  registerController,
  loginContoller,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// routes
// register || post

router.post("/register", registerController);

// login || post
router.post("/login", loginContoller);

// get current user || get
router.get("/current-user", authMiddleware, currentUserController);
module.exports = router;
