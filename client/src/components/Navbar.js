import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';

import Register from './auth/Register';
import Login from './auth/Login';

import { logout } from '../actions/authAction';

function NavBar(props) {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="navbar">
            <span className="navbar_logo">LOGO</span>
            <div className="navbar_btn">
                {(auth.isAuthenticated === false ?
                    <Fragment><Register /> <Login /></Fragment>
                    :
                    (<Button color="primary" className="btn" onClick={handleLogout}>Logout</Button>)
                )
                }

            </div>
        </div>
    );
}


export default NavBar;
