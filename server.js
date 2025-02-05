const express = require("express");

const app = express();

// test routes
app.use("/api/v1/test", require("./routes/testRoutes"));
const PORT = 8080;

app.listen(PORT, () => {
  console.log("node server running");
});
