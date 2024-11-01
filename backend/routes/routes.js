const express = require("express");
const routers = express.Router();
const controller = require("../controller/user.controller");
routers.post("/create", controller.createUser);
routers.get("/get", controller.getUser);
routers.put("/edit/:id", controller.updateUser);
routers.delete("/delete/:id", controller.deleteUser);
module.exports = routers;
