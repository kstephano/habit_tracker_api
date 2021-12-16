const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/token/:email', authController.token);
router.post('/logout/:email', authController.logout);

module.exports = router;
