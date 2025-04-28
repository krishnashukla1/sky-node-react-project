import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FileUploader from '../components/FileUploader';
import Button from '../components/Button';
import '../styles/Upload.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error('No file selected');
      return;
    }
    console.log('File before FormData:', file, 'Type:', file instanceof File);
    const formData = new FormData();
    formData.append('file', file);
    for (let [key, value] of formData.entries()) {
      console.log('FormData entry:', key, value);
    }
    try {
      const token = localStorage.getItem('token');
      // const res = await axios.post('http://localhost:5000/api/projects/upload', formData, {
       
        const res = await axios.post('https://sky-node-react-project-2.onrender.com/api/projects/upload', formData, {

        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Upload successful:', res.data);
      navigate('/edit-transcript');
    } catch (error) {
      console.error('Upload error:', error.response?.data || error.message);
    }
  };

  const handleYouTubeUpload = (e) => {
    e.preventDefault();
    console.log('Upload from YouTube clicked - functionality to be implemented');
    navigate('/edit-transcript');
  };

  return (
    <div className="upload-container">
      <Header />
      <h1>Upload Flow</h1>
      <form onSubmit={handleFileUpload}>
        <FileUploader
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            console.log('File state updated:', selectedFile);
          }}
          required
        />
        {file && <p>Selected file: {file.name}</p>}
        <Button type="submit">Upload File</Button>
      </form>
      <Button onClick={handleYouTubeUpload}>Upload from YouTube</Button>
    </div>
  );
};

export default Upload;