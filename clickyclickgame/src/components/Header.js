import React from "react";
import "../styles/Header.css";
const Header = (props) => {
    return (
        <nav className="navbar">
            <h1 className="navbar-brand">Clicky Game</h1>
            <h2 className="currentScore">Score: {props.currentScore} | Top Score: {props.topScore}</h2>
        </nav>
    )};

export default Header;