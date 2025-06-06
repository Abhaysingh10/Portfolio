import React, {  useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleArrowLeft, faFile } from '@fortawesome/free-solid-svg-icons'
import {  faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Col, Container,  Row } from 'react-bootstrap';

const Footer = () => {
    const [isUpArrow, setIsUpArrow] = useState(true);
    const [isDivVisible, setIsDivVisible] = useState(false);

    const toggleArrow = () => {
        setIsUpArrow((prevState) => !prevState);
        setIsDivVisible(!isDivVisible);
    }

    return (
        <div>
         
            <div className='footer button-container' >
                <div className='footer-child ' ><i class="bi bi-telephone"></i>
                <div className={` ${isDivVisible ? 'above-div' : 'above-div-hidden'}`}>
                <Container style={{ color: "white" }}>
                    <Row className="justify-content-md-center">
                        <Col xs={3}>
                            <a href="https://www.linkedin.com/in/abhaycodes/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon= {faLinkedin} fontSize={40} color='black' />

                            </a>
                        </Col>
                        <Col xs={3}>
                            <a href="https://github.com/Abhaysingh10" target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon= {faGithub} fontSize={40} color='black' />

                            </a>
                        </Col>
                        <Col xs={3}>
                            <a href="https://www.instagram.com/abhay_singh_97/" target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon= {faInstagram} fontSize={40} color='black' />
                            </a>
                        </Col>
                        <Col xs={3}>
                            {/* <a href='./../Assest/Document/Resume-abhay.pdf' target='_blank' rel='noreferrer'> */}
                            <FontAwesomeIcon icon= {faFile} fontSize={35} color='black' />

                            {/* </a> */}
                        </Col>
                    </Row>
                    <Row>
                    </Row>


                </Container>

            </div>
                    <FontAwesomeIcon className={`arrow-button ${isUpArrow ? 'rotate' : ''}`} icon={faCircleArrowLeft} size='2xl' onClick={toggleArrow} />
                </div>
            </div>
        </div>
    )
}

export default Footer