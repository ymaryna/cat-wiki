import React from "react";
import './TopTen.css'
import { g1, g2, g3, g4 } from "../assets";

function TopTen() {
    return (
        <>
            <div className="top-ten container">
                <h1>Top 10 most searched breeds</h1>
                <div className="top row">
                    <img className="col-md-2" src={g1} alt=""/>
                    <div className="col-md-8 ms-4 text">
                        <h2>1. Bengal</h2>
                        <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
                    </div>
                </div>
                <div className="top row">
                    <img className="col-md-2" src={g2} alt=""/>
                    <div className="col-md-8 ms-4 text">
                        <h2>2. Chartreux</h2>
                        <p>The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.</p>
                    </div>
                </div>
                <div className="top row">
                    <img className="col-md-2" src={g3} alt=""/>
                    <div className="col-md-8 ms-4 text">
                        <h2>3. Khao Manee</h2>
                        <p>The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.</p>
                    </div>
                </div>
                <div className="top row">
                    <img className="col-md-2" src={g4} alt=""/>
                    <div className="col-md-8 ms-4 text">
                        <h2>1. Bengal</h2>
                        <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopTen