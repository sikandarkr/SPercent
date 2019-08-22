const express = require("express");
const router = express.Router();
const userController = require("../api/controllers/users");
const findUserController = require("../api/controllers/listuser");
router.post("/register", userController.create);
router.post("/login", userController.authenticate);
router.get("/users", findUserController.Users);
router.get("/veryfy-mail",findUserController.Verify)
// router.post("/users", findUserController.FilterUser);
module.exports = router;
