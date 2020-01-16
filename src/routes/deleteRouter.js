const express = require("express");
const router = express.Router();
const deleteController = require("../controllers/deleteController.js");

router.get('/client/:idc' ,deleteController.delete_client);
router.get('/invoice/:idi',deleteController.delete_invoice_get);

module.exports = router;