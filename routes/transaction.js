const express = require("express");
const router = express.Router();
const userController = require("../api/controllers/transations");
const detailController = require("../api/controllers/transactionSummary");
router.post("/transfer", userController.transfer);
router.get("/get_transaction",  detailController.getSummary);
module.exports = router;


