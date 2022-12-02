import React from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return <div className="App">
        <Provider store={store}>
            <Settings/>
            <Counter/>
        </Provider>
    </div>
}

export default App;
