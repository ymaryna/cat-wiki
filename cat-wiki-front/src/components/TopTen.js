import { React, useEffect, useState } from "react";
import WikiCatApi from "../services/WikiCatApi";
import { useLocation, Link } from 'react-router-dom'
import './TopTen.css'
import { g1, g2, g3, g4 } from "../assets";

function TopTen() {
    const location = useLocation()
    const { favs } = location.state

    return (
        <>
            <div className="top-ten container">
                <h1>Top 10 most searched breeds</h1>
                {favs.map((cat, index) =>
                <Link to={`/${cat.name}`} state={{cat}} key={index} className="top row">
                    <img className="col-md-2" src={cat.image.url} alt=""/>
                    <div className="col-md-8 ms-4 text">
                        <h2>{index+1}. {cat.name}</h2>
                        <p>{cat.description}</p>
                    </div>
                </Link>
                )}
            </div>
        </>
    )
}

export default TopTen