const express = require('express');
const router = express.Router();
const dateController = require(`../controllers/dateController`);
const authJWT = require(`../controllers/authJWT`);

router.post(`/addDate`, authJWT.authJWT, dateController.addDate);

router.get(`/getDate`, authJWT.authJWT, dateController.getDate)

module.exports = router;