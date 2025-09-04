const express = require("express");
const app = express();

// Logging middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

// Example route
app.get("/", (req, res) => {
  res.send("Logging Middleware is working!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
