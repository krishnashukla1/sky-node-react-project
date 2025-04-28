const express = require('express');
const router = express.Router();
const { signup, login, getUser, updateUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', authMiddleware, getUser); 
router.put('/me', authMiddleware, updateUser); 

module.exports = router;