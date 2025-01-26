const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
module.exports = mongoose;
