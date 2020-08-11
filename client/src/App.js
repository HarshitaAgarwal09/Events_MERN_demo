import React from 'react';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Events from './components/Events';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Events />
        </div>
    );
}

export default App;
