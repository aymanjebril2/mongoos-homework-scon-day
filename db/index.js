const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/dayOneDb", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to mongooos "))
  .catch((e) => console.error("connection error", e));
const db = mongoose.connection;

module.exports = db;
