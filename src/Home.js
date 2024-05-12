import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <h1>Hello! I am a vending machine!</h1>
            <h2>What would you like to eat?</h2>
            <div className="links">
                <Link to='/soda' className="link">Soda</Link>
                <Link to='/chips' className="link">Chips</Link>
                <Link to='/candy' className="link">Candy</Link>
            </div>
        </div>
    );
}

export default Home;
