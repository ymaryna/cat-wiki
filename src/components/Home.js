import { React, useState, useEffect } from "react";
import { cat1, cat2, cat3, cat4, img1, img2, img3, logoHeader, logoHeaderMobile } from '../assets'
import { Modal, Form, InputGroup, Button } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const [resultShow, setResultShow] = useState(false);
    const [cats, setCats] = useState([]);

    const handleSearch = (event) => {
        const { value } = event.target
    
        setSearch(value)
        setResultShow(true)
        
        // if(value.length >= 3) {
        //     this.timeId = setTimeout(() => {
        //         const { uplayNick } = this.state
        
        //         ValkCupService.users({uplayNick})
        //         .then(users => {
        //             // console.log('counter => ', ++this.counter)
        //             this.setState({ users }, () => console.info('state => ', this.state.users))
        //         // })
        //     }, 500)
    
        // } else if(value.length <= 0) {
        //     this.setState({ users: [] })
        // }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        
    })

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
                    onChange={ handleSearch }
                    />
                    <InputGroup.Text id="inputGroup-sizing-lg"><AiOutlineSearch /> </InputGroup.Text>
                </InputGroup>
                {resultShow ?
                    <div className="results d-flex flex-column">
                        <Link className="result" to="">Gato1</Link>
                        <Link className="result" to="">Gato2</Link>
                        <Link className="result" to="">Gato3</Link>
                        <Link className="result" to="">Gato4</Link>
                    </div> 
                 : 
                 ''}
                <InputGroup className="small" size="md">
                    <Form.Control
                    aria-label="small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Search"
                    onClick={ handleShow }
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
                <Link className="more" to="/top-ten">SEE MORE -</Link>
            </div>
            <div className="cats row d-flex justify-content-between">
                <Link to="#" className="col-lg-3 col-sm-6 cat">
                    <img src={cat1} alt="cat1"/>
                    <p>Bengal</p>
                </Link>
                <Link to="#" className="col-lg-3 col-sm-6 cat">
                    <img src={cat2} alt="cat1"/>
                    <p>Savannah</p>
                </Link> 
                <Link to="#" className="col-lg-3 col-sm-6 cat">
                    <img src={cat3} alt="cat1"/>
                    <p>Norwegian Forest Cat</p>
                </Link>
                <Link to="#" className="col-lg-3 col-sm-6 cat">
                    <img src={cat4} alt="cat1"/>
                    <p>Selkirk Rex</p>
                </Link>
            </div>
        </section>
        <section className="section why-have-cats">
            <div className="d-flex row">
                <div className="d-flex flex-column justify-content-center col-lg-5 col-md-12">
                    <hr />
                    <h2>Why should you<br/>have a cat?</h2>
                    <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                    <Link to="#">READ MORE -</Link>
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
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <InputGroup className="large-modal" size="lg">
                <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Enter your breed"
                onChange={ handleSearch }
                />
                <InputGroup.Text id="inputGroup-sizing-lg"><AiOutlineSearch /> </InputGroup.Text>
            </InputGroup>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default Home;