const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// test routes
app.use("/api/v1/test", require("./routes/testRoutes"));
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `server is runing in ${process.env.DEV_MODE} Modeon Por ${process.env.PORT}`
      .bgBlue.white
  );
});
