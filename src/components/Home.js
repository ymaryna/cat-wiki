import React from "react";
import logoHeader from "../assets/img/logo_header.svg";
import logoHeaderMobile from "../assets/img/logo_header_mobile.svg";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import cat1 from '../assets/img/cat1.png'
import cat2 from '../assets/img/cat2.png'
import cat3 from '../assets/img/cat3.png'
import cat4 from '../assets/img/cat4.png'
import img1 from '../assets/img/image 1.png'
import img2 from '../assets/img/image 2.png'
import img3 from '../assets/img/image 3.png'
import { AiOutlineSearch } from 'react-icons/ai';
import "./Home.css";
import { ModalFooter } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
    return (
        <>
        <header className="section">
            <div className="container text">
                <img className="logo-desktop" src={logoHeader} alt="logo" />
                <img className="logo-mobile" src={logoHeaderMobile} alt="logo mobile" />
                <h4>Get to know more about your cat breed</h4>
                <InputGroup className="large" size="lg">
                    <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Enter your breed"
                    />
                    <InputGroup.Text id="inputGroup-sizing-lg"><AiOutlineSearch /> </InputGroup.Text>
                </InputGroup>
                <InputGroup className="small" size="md">
                    <Form.Control
                    aria-label="small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Search"
                    />
                    <InputGroup.Text id="inputGroup-sizing-lg"><AiOutlineSearch /> </InputGroup.Text>
                </InputGroup>
            </div>
        </header>
        <section className="section most-search">
            <h6>Most Searched Breeds</h6>
            <hr/>
            <div className="d-flex justify-content-between align-items-end flex-sm-column flex-lg-row">
                <h2>66+ Breeds For you<br/>to discover</h2>
                <a className="more" href="#">SEE MORE -</a>
            </div>
            <div className="cats row d-flex justify-content-between">
                <a href="#" className="col-lg-3 col-sm-6 cat">
                    <img src={cat1} alt="cat1"/>
                    <p>Bengal</p>
                </a>
                <a href="#" className="col-lg-3 col-sm-6 cat">
                    <img src={cat2} alt="cat1"/>
                    <p>Savannah</p>
                </a> 
                <a href="#" className="col-lg-3 col-sm-6 cat">
                    <img src={cat3} alt="cat1"/>
                    <p>Norwegian Forest Cat</p>
                </a>
                <a href="#" className="col-lg-3 col-sm-6 cat">
                    <img src={cat4} alt="cat1"/>
                    <p>Selkirk Rex</p>
                </a>
            </div>
        </section>
        <section className="section why-have-cats">
            <div className="d-flex row">
                <div className="d-flex flex-column justify-content-center col-lg-5 col-md-12">
                    <hr />
                    <h2>Why should you<br/>have a cat?</h2>
                    <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                    <a href="#">READ MORE -</a>
                </div>
                <div className="d-flex col-lg-7 col-md-12">
                    <div className="d-flex flex-column align-items-end">
                        <img src={img2} alt="image2"/>
                        <img src={img1} alt="image1"/>
                    </div>
                    <div>
                        <img src={img3} alt="image3"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;