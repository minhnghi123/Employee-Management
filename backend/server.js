require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const connection = require("./config/database.config");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
connection();
const routers = require("./routes/routes");
app.use("/api", routers);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // logs the server started message
});
