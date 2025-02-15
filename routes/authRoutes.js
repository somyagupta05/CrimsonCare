const express = require("express");
const { registerController } = require("../controllers/authController"); // Fix the import
const router = express.Router();

// routes
router.post("/register", registerController); // Use the correct function

module.exports = router;
