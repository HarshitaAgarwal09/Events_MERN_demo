import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import store from './store';

import { loadUser } from './actions/authAction';

import Navbar from './components/Navbar';
import Events from './components/Events';
import AddingEvent from './components/AddingEvent';

function App() {
    store.dispatch(loadUser());

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar />
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
