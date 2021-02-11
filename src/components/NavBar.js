import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div
          style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
          }}
        >
          <NavLink style={{ marginRight: "10px" }} to="/profile">
            Profile
          </NavLink>
          <NavLink style={{ marginRight: "10px" }} to="/">
            Home
          </NavLink>
        </div>
      );
}

export default NavBar;