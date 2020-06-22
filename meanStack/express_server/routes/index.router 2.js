const express = require('express');
const router = express.Router();
// const Post = require('../models/thp1.model')

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
// router.get('/sensorData', (req, res) => {
//     res.send("We are on sensorData");
// });
// router.post('/sensorData', (req, res) => {
//     console.log(req.body);
// });

module.exports = router;



