const express = require('express');
const router = express.Router();
const habitController = require(`../controllers/habitController`);
const authJWT = require(`../controllers/authJWT`);

router.post(`/addHabit`, authJWT.authJWT, habitController.addHabit);

router.post(`/completeHabit`, authJWT.authJWT, habitController.completeHabit);

router.post(`/deleteHabit`, authJWT.authJWT, habitController.deleteHabit);

module.exports = router;