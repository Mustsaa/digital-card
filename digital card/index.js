import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)