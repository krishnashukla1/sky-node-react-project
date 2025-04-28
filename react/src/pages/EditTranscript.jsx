import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/EditTranscript.css';

const EditTranscript = () => {
  const [transcript, setTranscript] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const token = localStorage.getItem('token');
        // const res = await axios.get('http://localhost:5000/api/transcripts', {
         
        const res = await axios.get('https://sky-node-react-project-2.onrender.com/api/transcripts', {

        headers: { Authorization: `Bearer ${token}` }
        });
        setTranscript(res.data.content);
      } catch (error) {
        console.error(error.response.data);
      }
    };
    fetchTranscript();
  }, []);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      // await axios.put('http://localhost:5000/api/transcripts', { content: transcript }, {
       
        await axios.put('https://sky-node-react-project-2.onrender.com/api/transcripts', { content: transcript }, {

        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/account-settings');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="edit-transcript-container">
      <h1>Edit Transcript Flow</h1>
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Edit transcript here..."
      />
      <button onClick={handleSave}>Save Transcript</button>
    </div>
  );
};

export default EditTranscript;