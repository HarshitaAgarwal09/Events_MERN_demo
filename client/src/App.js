import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import NavBar from './components/NavBar';
import Events from './components/Events';
import AddingEvent from './components/AddingEvent';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route path="/add_event">
                        <AddingEvent />
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
