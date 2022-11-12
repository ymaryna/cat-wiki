import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './SpecificCat.css'
import { cat1, g1, g2, g3, g4, g5, g6, g7, g8 } from "../assets";

function SpecificCat() {
    return (
        <>
        <div className="container specific-cat">
            <div className="row">
                <div className="col-lg-4 col-md-12 img-header">
                    <img className="w-100" src={cat1} alt=""/>
                </div>
                <div className="col-lg-6 col-md-12 offset-md-1">
                    <h1>Bengal</h1>
                    <p>Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.</p>
                    <div className="specifications">
                        <p className=""><b>Temperament:</b> Alert, Agile, Energetic, Demanding, Intelligent</p>
                        <p className=""><b>Origin:</b> United States</p>
                        <p className=""><b>Life Span:</b> 12 - 15 years</p>
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Adaptability:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Affection level:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Child Friendly:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Grooming:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <div className="dot yes"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Intelligence:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Health issues:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Social needs:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Stranger friendly:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot yes"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <h2>Other photos</h2>
                <div className="gallery row d-flex justify-content-center">
                    <img className="col-lg-3 col-md-3 col-sm-12 mt-4" src={g1} alt=""/>
                    <img className="col-lg-3 col-md-3 col-sm-12 mt-4" src={g2} alt=""/>
                    <img className="col-lg-3 col-md-3 col-sm-12 mt-4" src={g3} alt=""/>
                    <img className="col-lg-3 col-md-3 col-sm-12 mt-4" src={g4} alt=""/>
                    <img className="col-lg-3 col-md-3 col-sm-12 mt-4" src={g5} alt=""/>
                    <img className="col-lg-3 col-md-3 col-sm-12 mt-4" src={g6} alt=""/>
                    <img className="col-lg-3 col-md-3 col-sm-12 mt-4" src={g7} alt=""/>
                    <img className="col-lg-3 col-md-3 col-sm-12 mt-4" src={g8} alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SpecificCat