import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Button from '../components/Button';
import '../styles/AccountSettings.css';

const AccountSettings = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        // const res = await axios.get('http://localhost:5000/api/auth/me', {
        
        const res = await axios.get('https://sky-node-react-project-2.onrender.com/api/auth/me', {

        headers: { Authorization: `Bearer ${token}` }
        });
        setUser({ name: res.data.name, email: res.data.email });
      } catch (error) {
        console.error(error.response.data);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      // await axios.put('http://localhost:5000/api/auth/me', user, {
        await axios.put('https://sky-node-react-project-2.onrender.com/api/auth/me', user, {

        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="account-settings-container">
      <Header />
      <h1>Account Settings</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <InputField
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Button type="submit">Update Profile</Button>
      </form>
    </div>
  );
};

export default AccountSettings;