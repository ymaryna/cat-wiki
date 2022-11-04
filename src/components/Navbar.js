import React from "react";
import logo from "../assets/img/CatwikiLogo.svg";
import "./Nabvar.css"

function Navbar() {
    return (
        <section className="section logo">
            <img src={logo} alt="logo"/>
        </section>
    )
}

export default Navbar