import React from 'react';
import './App.css';
import {Settings} from "./Components/Settings/Settings";
import {Counter} from "./Components/Counter/Counter";

function App() {
    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
