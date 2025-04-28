const Transcript = require('../models/Transcript');
const Project = require('../models/Project');

const getTranscript = async (req, res) => {
  try {
    const project = await Project.findOne({ createdBy: req.user.id }).sort({ createdAt: -1 });
    if (!project) return res.status(404).json({ message: 'Project not found' });

    const transcript = await Transcript.findOne({ projectId: project._id }).sort({ editedAt: -1 });
    if (!transcript) return res.status(404).json({ message: 'Transcript not found' });

    res.json(transcript);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateTranscript = async (req, res) => {
  const { content } = req.body;
  try {
    const project = await Project.findOne({ createdBy: req.user.id }).sort({ createdAt: -1 });
    if (!project) return res.status(404).json({ message: 'Project not found' });

    let transcript = await Transcript.findOne({ projectId: project._id }).sort({ editedAt: -1 });
    if (!transcript) {
      transcript = new Transcript({
        projectId: project._id,
        content,
        editedBy: req.user.id
      });
    } else {
      transcript.content = content;
      transcript.version += 1;
      transcript.editedAt = Date.now();
    }

    await transcript.save();
    res.json(transcript);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getTranscript, updateTranscript };