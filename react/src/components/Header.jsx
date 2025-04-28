import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Quest AI</div>
      <nav>
        <Link to="/project-creation">Create Project</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/edit-transcript">Edit Transcript</Link>
        <Link to="/account-settings">Account Settings</Link>
        <Link to="/" onClick={() => localStorage.removeItem('token')}>Logout</Link>
      </nav>
    </header>
  );
};

export default Header;