import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Expenses from "./pages/Expenses/Expenses";

function App() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <Router>
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                <div className="overlay"></div>
                <Expenses sidebar={sidebar} setSidebar={setSidebar} />
            </Router>
        </>
    );
}

export default App;
