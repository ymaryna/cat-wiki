import React from "react";
import logo from "../assets/img/CatwikiLogo.svg";
import "./Footer.css"

function Footer() {
    return (
        <footer className="section footer d-flex justify-content-between align-items-center">
            <img src={logo} alt="logo"/>
            <p>© created by ymaryna - devChallenge.io 2022</p>
        </footer>
    )
}

export default Footer