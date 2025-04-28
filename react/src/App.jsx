import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ProjectCreation from './pages/ProjectCreation';
import Upload from './pages/Upload';
import EditTranscript from './pages/EditTranscript';
import AccountSettings from './pages/AccountSettings';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/project-creation" element={<ProjectCreation />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/edit-transcript" element={<EditTranscript />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;