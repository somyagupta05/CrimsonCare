const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// Create Inventory Controller
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // Validate inventoryType and user role
    if (inventoryType === "in" && user.role !== "donar") {
      return res
        .status(403)
        .json({ success: false, message: "Not a donor account" });
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      return res
        .status(403)
        .json({ success: false, message: "Not a hospital" });
    }

    // Save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();

    return res.status(201).json({
      success: true,
      message: "New Blood Record Added",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error in create inventory API",
      error: error.message,
    });
  }
};

module.exports = { createInventoryController };
