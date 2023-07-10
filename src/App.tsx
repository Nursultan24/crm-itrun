import React from 'react';
import RoutesA from "./utils/RoutesA";
import "./style/style.scss"
import Sidebar from "./components/Sidebar/Sidebar";
const App = () => {
    return (
        <div className="app">
            <Sidebar/>
            <RoutesA/>
        </div>
    );
};

export default App;