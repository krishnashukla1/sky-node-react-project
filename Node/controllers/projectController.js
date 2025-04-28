const Project = require('../models/Project');

const createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const project = new Project({
      name,
      description,
      createdBy: req.user.id
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const uploadFile = async (req, res) => {
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  console.log('Request file:', req.file);
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    const project = await Project.findOne({ createdBy: req.user.id }).sort({ createdAt: -1 });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    project.files.push(req.file.path);
    await project.save();
    res.json({ message: 'File uploaded successfully', project });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createProject, getProjects, uploadFile };