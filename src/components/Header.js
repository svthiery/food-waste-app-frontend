import React from 'react';
import NavBar from './NavBar'


function Header({ currentUser  }) {
    return (
        <div>
            <NavBar currentUser={currentUser}  />
        </div>
    )
}

export default Header;