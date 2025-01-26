const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./index.js");
const dbConfig = require("./config/dbConfig.js");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
