const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const cors = require("cors");

const app = express();
const port = 4000;

//su dung ung dung kieu json
app.use(express.json());

app.use(cors());

//cai dat static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

app.use("/api", rootRouter);
app.listen(port, async () => {
  console.log(`App is listening on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
