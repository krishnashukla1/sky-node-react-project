import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Button from '../components/Button';
import '../styles/ProjectCreation.css';

const ProjectCreation = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }
    const fetchProjects = async () => {
      console.log('Token:', token);
      try {
        // const res = await axios.get('http://localhost:5000/api/projects', {


        const res = await axios.get('https://sky-node-react-project-2.onrender.com/api/projects',{

          headers: { Authorization: `Bearer ${token}` }
        });
        setProjects(res.data);
        setError('');
      } catch (error) {
        setError('Error fetching projects: ' + (error.response?.data?.message || error.message));
      }
    };
    fetchProjects();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }
    console.log('Token:', token);
    try {
      // const res = await axios.post('http://localhost:5000/api/projects', { name, description }, {
        
      const res = await axios.post('https://sky-node-react-project-2.onrender.com/api/projects', { name, description }, {
// 
      headers: { Authorization: `Bearer ${token}` }
      });
      setName('');
      setDescription('');
      setProjects([...projects, res.data]);
      setError('');
      navigate('/upload');
    } catch (error) {
      setError('Error creating project: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleDelete = async (projectId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        // await axios.delete(`http://localhost:5000/api/projects/${projectId}`, {
          
        await axios.delete(`https://sky-node-react-project-2.onrender.com/api/projects/${projectId}`, {

        headers: { Authorization: `Bearer ${token}` }
        });
        setProjects(projects.filter(project => project._id !== projectId));
        setError('');
      } catch (error) {
        setError('Error deleting project: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  return (
    <div className="project-creation-container">
      <Header />
      <h1>Create New Project</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit">Create Project</Button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>Previous Projects</h2>
      <table className="projects-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{new Date(project.createdAt).toLocaleString()}</td>
              <td style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => navigate(`/upload?projectId=${project._id}`)}
                  style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.8rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.8rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectCreation;