import { React } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './SpecificCat.css'
import { cat1, g1, g2, g3, g4, g5, g6, g7, g8 } from "../assets";
import { useParams, useLocation } from 'react-router-dom'
import Dots from "./misc/Dots";

function SpecificCat() {
    const { cats } = useParams()
    const location = useLocation()
    const { cat } = location.state

    const dots = (type) => {
        while (type <= 5) {

        }
    }

    return (
        <>
        {console.log(cat)}
        <div className="container specific-cat">
            <div className="row">
                <div className="col-lg-4 col-md-12 img-header">
                    <img className="w-100" src={cat1} alt=""/>
                </div>
                <div className="col-lg-6 col-md-12 offset-md-1">
                    <h1>{cat.name}</h1>
                    <p>{cat.description}</p>
                    <div className="specifications">
                        <p className=""><b>Temperament:</b> {cat.temperament}</p>
                        <p className=""><b>Origin:</b> {cat.origin}</p>
                        <p className=""><b>Life Span:</b> {cat.life_span}</p>
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Adaptability:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <Dots numberInfo={cat.adaptability}/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Affection level:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <Dots numberInfo={cat.affection_level}/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Child Friendly:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <Dots numberInfo={cat.child_friendly}/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Grooming:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <Dots numberInfo={cat.grooming}/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Intelligence:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <Dots numberInfo={cat.intelligence}/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Health issues:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <Dots numberInfo={cat.health_issues}/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Social needs:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <Dots numberInfo={cat.social_needs}/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-dots">
                                <p><b>Stranger friendly:</b></p>
                                <div className="dots d-flex align-items-center">
                                    <Dots numberInfo={cat.stranger_friendly}/>
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