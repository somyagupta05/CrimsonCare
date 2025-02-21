const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");
// create inventory

const createInventoryController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return throw new Error("user not found");
    }
    if (inventoryType == "in" && user.role !== "donar") {
      return throw new Error("Not a donar account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      return throw new ERROR("not a hospital");
    }
    // save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Record Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in crete inventory api",
      error,
    });
  }
};
module.exports = { createInventoryController };
