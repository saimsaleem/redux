import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import './Navbar.css';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../State/index'

const Navbar = ({ scrolled }) => {
  const [userData, setUserData] = useState(null);

  const name = useSelector(state => state.name)

  const dispatch = useDispatch();
  const {addName, removeName} = bindActionCreators(ActionCreators, dispatch);

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
            addName(data.username);
          } else {
          }
        }
      } catch (error) {
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
          <h1 style={{ whiteSpace:'nowrap'}}><strong>User:</strong> {name}</h1>
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
