const express = require("express");

const app = express();

// test routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to blood bank ",
  });
});
const PORT = 8080;

app.listen(PORT, () => {
  console.log("node server running");
});
