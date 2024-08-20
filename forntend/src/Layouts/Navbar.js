import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchdata(){
      try {
        const token = localStorage.getItem('token');
  
        if (token) {
          const response = await fetch('http://localhost:3001/user/getUser', {
            headers: {
              token: token,
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setUserData(data);
          } else {
            const errorData = await response.json();
            setError(errorData.message);
          }
        }
      } catch (error) {
        setError('An error occurred while fetching user data.');
      }
    }
   fetchdata();
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <Link to="/">
            <img src="/Icons/Logo1.png" alt="INVISION360 Logo" />
          </Link>
          <h1 style={{ whiteSpace:'nowrap'}}><strong>User:</strong> Saim Saleem</h1>
        </div>
        
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/">Features</Link>
          <Link to="/">Contact</Link>
          {userData ? (
            <Link id='username' to="/profile">{userData.username}</Link>
          ) : (
            <Link id='username' to="/login">Login</Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
