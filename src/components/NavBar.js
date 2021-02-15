import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ currentUser }) {
    return (
        <div
          style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
          }}
        >
          <NavLink style={{ marginRight: "10px" }} to="/">
            Home
          </NavLink>
        {currentUser ? (
        <>
          <NavLink style={{ marginRight: "10px" }} to="/profile">
            Profile
          </NavLink>
          <button>Log Out</button>
        </>
        ) : (
        <>
          <NavLink style={{ marginRight: "10px" }} to="/signup">
            Signup
          </NavLink>
          <NavLink style={{ marginRight: "10px" }} to="/login">
          Login
          </NavLink>
        </>
           )
         }
          
        </div>
      );
}

export default NavBar;