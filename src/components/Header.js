import React from 'react';
import NavBar from './NavBar'


function Header({ currentUser  }) {
    return (
        <div className="header">
            <NavBar currentUser={currentUser}  />
        </div>
    )
}

export default Header;