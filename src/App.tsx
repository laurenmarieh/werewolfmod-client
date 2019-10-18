import React from 'react';
import logo from './werewolf.svg';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Werewolf Modbot</p>
            </header>
        </div>
    );
};

export default App;
