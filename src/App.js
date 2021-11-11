import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Expenses from "./pages/Expenses/Expenses";

function App() {
    const [sidebar, setSidebar] = useState(false);
    console.log(sidebar);

    return (
        <>
            <Router>
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                <div
                    className={
                        sidebar
                            ? "overlay show-overlay hideForDesktop"
                            : "overlay hideForDesktop"
                    }
                ></div>
                <Expenses sidebar={sidebar} setSidebar={setSidebar} />
            </Router>
        </>
    );
}

export default App;
