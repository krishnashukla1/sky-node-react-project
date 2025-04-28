const express = require('express');
const router = express.Router();
const { createProject, uploadFile ,getProjects} = require('../controllers/projectController');
const authMiddleware = require('../middleware/auth');
// const { upload } = require('../server');
const upload = require('../middleware/multer');
router.post('/', authMiddleware, createProject); // Route for creating a project
router.get('/', authMiddleware, getProjects);
router.post('/upload', authMiddleware, upload.single('file'), uploadFile);

module.exports = router;