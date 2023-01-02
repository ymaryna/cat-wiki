import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import "./Nabvar.css"

function Navbar() {
    return (
        <section className="section logo">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
        </section>
    )
}

export default Navbar