import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Button from '../components/Button';
import '../styles/Welcome.css';

const Welcome = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignup ? '/api/auth/signup' : '/api/auth/login';
      const data = isSignup ? { email, password, name } : { email, password };
      // const res = await axios.post(`http://localhost:5000${url}`, data);
      
      const res = await axios.post(`https://sky-node-react-project-2.onrender.com${url}`, data);

      localStorage.setItem('token', res.data.token);
      navigate('/project-creation');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="welcome-container">
      <Header />
      <h1>Welcome to Quest AI</h1>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">{isSignup ? 'Sign Up' : 'Login'}</Button>
      </form>
      <Button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Switch to Login' : 'Switch to Sign Up'}
      </Button>
    </div>
  );
};

export default Welcome;