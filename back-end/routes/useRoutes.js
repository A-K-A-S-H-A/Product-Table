// routes/userRoutes.js
const express = require('express');
const { getUser } = require('../controllers/userController');
const router = express.Router();

router.get('/user/:id', getUser);

module.exports = router;
