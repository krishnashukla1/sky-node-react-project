const express = require('express');
const router = express.Router();
const { getTranscript, updateTranscript } = require('../controllers/transcriptController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, getTranscript);

router.put('/', authMiddleware, updateTranscript);

module.exports = router;