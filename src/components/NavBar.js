import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useHistory } from "react-router-dom";

function NavBar({ currentUser, resetCurrentUser }) {

    const history = useHistory();

    function handleLogout() {
      resetCurrentUser(null)
      history.push("/");
    }

    return (
        <div
        >
          <h1>Polenta To Go Around</h1>

          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        {currentUser ? (
        <>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
          <button className="logout" onClick={handleLogout}>Log Out</button>
        </>
        ) : (
        <>
          <NavLink to="/signup" className="nav-link">
            Signup
          </NavLink>
          <NavLink to="/login" className="nav-link">
          Login
          </NavLink>
        </>
           )
         }
          
        </div>
      );
}

export default NavBar;