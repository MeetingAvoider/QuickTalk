const app = require("./index.js");
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
