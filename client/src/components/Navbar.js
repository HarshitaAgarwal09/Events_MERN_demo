import React from 'react';
import Button from '@material-ui/core/Button';

function Navbar() {
    return (
        <div className="navbar">
            <span className="navbar_logo">
                Navbar
            </span>

            <Button variant="contained" color="primary" className="btn"> Register</Button>
            <Button variant="contained" color="primary" className="btn">Login</Button>
            <Button variant="contained" color="primary" className="btn">Logout</Button>
        </div>
    );
}

export default Navbar;
