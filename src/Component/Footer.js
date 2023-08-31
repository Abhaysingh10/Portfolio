import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { resumePDF } from './../Assest/Document/Resume-abhay.pdf'

const Footer = () => {
    const [isUpArrow, setIsUpArrow] = useState(true);
    const [animationClass, setAnimationClass] = useState('');
    const [isDivVisible, setIsDivVisible] = useState(false);

    const toggleArrow = () => {
        setIsUpArrow((prevState) => !prevState);
        setIsDivVisible(!isDivVisible);
    }

    useEffect(() => {
        if (!isUpArrow) {
            setAnimationClass('')
        } else {
            setAnimationClass('animate-arrow');
        }
    }, [isUpArrow])

    const handleDownload = () => {
        const pdfFilePath = {resumePDF}; // Update with the actual path
        const a = document.createElement('a');
        a.href = pdfFilePath;
        a.download = "Abhay's resume.pdf"; // Update with the desired file name
        a.click();
    };


    return (
        <div>
            {isDivVisible && <div className="above-div">
                <Container style={{ color: "white" }}>
                    <Row className="justify-content-md-center">
                        <Col xs={3}>
                            <a href="https://www.linkedin.com/in/abhaycodes/" target="_blank" rel="noopener noreferrer">
                                <Image src={require('./../Assest/Image/linkedin-pink.png')}
                                    role='button'
                                    title="Linkedin"
                                    alt='Linkedin logo' />
                            </a>
                        </Col>
                        <Col xs={3}>
                            <a href="https://github.com/Abhaysingh10" target='_blank' rel='noopener noreferrer'>
                                <Image src={require('./../Assest/Image/github-pink.png')}
                                    role='button'
                                    title="Github"
                                    alt='Github logo' />
                            </a>
                        </Col>
                        <Col xs={3}>
                            <a href="https://www.instagram.com/abhay_singh_97/" target='_blank' rel='noopener noreferrer'>
                                <Image src={require('./../Assest/Image/icons8-instagram-48.png')}
                                    title="Instagram"
                                    // role='button'
                                    alt='Instagram logo' />
                            </a>
                        </Col>
                        <Col xs={3}>
                            {/* <a href='./../Assest/Document/Resume-abhay.pdf' target='_blank' rel='noreferrer'> */}
                            <Image src={require('./../Assest/Image/icons8-download-48.png')}
                                onClick={handleDownload}
                                title='Download Resume'
                                role='button'
                                alt='Download resume' />
                            {/* </a> */}
                        </Col>
                    </Row>
                    <Row>
                    </Row>


                </Container>

            </div>}
            <div className='footer button-container' >
                <div className='footer-child ' ><i class="bi bi-telephone"></i>
                    <FontAwesomeIcon className={`arrow-button ${animationClass}`} icon={faCircleArrowLeft} size='2xl' onClick={toggleArrow} />
                </div>
            </div>
        </div>
    )
}

export default Footer