const express = require("express");
const authMiddelware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();
router.post("/create-inventory", authMiddelware, createInventoryController);
module.exports = router;
