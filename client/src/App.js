import React from 'react';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import store from './store';
import NavBar from './components/NavBar';
import Events from './components/Events';
import AddingEvent from './components/AddingEvent';

function App() {
    return (
        <Provider store = {store}>
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
        </Provider>
       );
}

export default App;
