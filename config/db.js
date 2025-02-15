const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`mongodb database error ${error}`.bgRed.white);
  }
};
