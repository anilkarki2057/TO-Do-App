require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const indexRouter = require("./routes");
const PORT = +process.env.PORT || 5004;

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Database is connected");
});
app.use(express.json());

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err.toString() || "Something went wrong...";

  res.status(500).json({ data: "", msg: "err" });
});

app.listen(PORT, () => {
  console.log(`App is running on port number ${PORT}`);
});
