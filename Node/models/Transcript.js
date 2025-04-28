const mongoose = require('mongoose');

const transcriptSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  content: { type: String, required: true },
  editedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  editedAt: { type: Date, default: Date.now },
  version: { type: Number, default: 1 }
});

module.exports = mongoose.model('Transcript', transcriptSchema);