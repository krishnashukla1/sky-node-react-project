const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const transcriptRoutes = require('./routes/transcript');
const upload = require('./middleware/multer'); 

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
// app.options('*', cors());




app.use(cors({
  origin: ['http://localhost:5173', 'https://sky-node-react-project-3.onrender.com/'],  // Replace with your frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());


// Error handling for Multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error('Multer error:', err);
    return res.status(400).json({ message: 'File upload error: ' + err.message });
  } else if (err) {
    console.error('Unknown error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
  next();
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/transcripts', transcriptRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));