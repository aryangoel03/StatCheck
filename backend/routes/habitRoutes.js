const express = require('express');
const router = express.Router();
const habitController = require(`../controllers/habitController`);
const authJWT = require(`../controllers/authJWT`);

router.post(`/addHabit`, authJWT.authJWT, habitController.addHabit);

module.exports = router;