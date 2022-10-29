import React from "react";
import logo from "../assets/img/CatwikiLogo.svg";
import logoHeader from "../assets/img/logo_header.svg";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch } from 'react-icons/ai';
import "./Home.css";

function Home() {
    return (
        <>
        <section className="section logo">
            <img src={logo} alt="logo"/>
        </section>
        <header className="section">
            <div className="container text">
                <img src={logoHeader} alt="logo" />
                <h4>Get to know more about your cat breed</h4>
                <InputGroup size="lg">
                    <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Enter your breed"
                    />
                    <InputGroup.Text id="inputGroup-sizing-lg"><AiOutlineSearch /> </InputGroup.Text>
                </InputGroup>
            </div>
        </header>
        <section className="section most-search">
            <h6>Most Searched Breeds</h6>
            <hr/>
            <h2>66+ Breeds For you<br/>to discover</h2>
        </section>
        </>
    )
}

export default Home;