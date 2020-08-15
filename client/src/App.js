import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
import Events from './components/Events';
import AddingEvent from './components/AddingEvent';

function App() {
    const auth = useSelector(state => state.auth);
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/add_event">
                        {!auth.isAuthenticated ? <Redirect to="/" /> : <AddingEvent />}
                    </Route>
                    <Route path="/">
                        <Events />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
