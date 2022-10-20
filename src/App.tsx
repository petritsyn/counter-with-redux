import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Settings} from "./Components/Settings/Settings";
import {Counter} from "./Components/Counter/Counter";

function App() {
    return (
        <div className="App">
            <Settings/>
            <Counter value={0}/>
        </div>
    );
}

export default App;
