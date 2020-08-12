import React from 'react';

import Register from './auth/Register';
import Login from './auth/Login';

function NavBar() {
    return (
        <div className="navbar">
            <span className="navbar_logo">LOGO</span>
            <div className="navbar_btn">
                <Register />
                <Login />
                {/* <Button color="primary" className="btn">Logout</Button> */}
            </div>
        </div>
    );
}

export default NavBar;
