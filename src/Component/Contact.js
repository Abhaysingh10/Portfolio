import React from 'react'
import { Sidebar } from './Sidebar'
import { Button, Col, Container, Row } from 'react-bootstrap'
import WavingHand from './../Assest/Image/waving-hand.png'

export const Contact = () => {



    return (

        <Container>
            <Row>
                <Col xs lg="3" style={{ backgroundColor: "  " }}>
                    <Sidebar />
                </Col>
                <Col className="item-b " id='item-b' style={{ backgroundColor: "" }}>
                    <div className="home-body">
                        <Container style={{ backgroundColor: "" }}>
                            <div className='' style={{}}>
                                <Row className='contact-page-title-parent'>
                                    <div className='contact-page-title'>
                                        <span>Love to hear from you, <img src={WavingHand}  alt=''/> </span><br />
                                        <span>Get in touch</span>
                                    </div>
                                </Row>
                                <Row className='contact-form'>
                                    <div style={{ justifyContent: "center", padding: "20px" }}>
                                        <Container>
                                            <Row style={{ backgroundColor: "" }}>
                                                <Col className='contact-input-title'>Your name</Col>
                                                <Col className='contact-input-title'>Your email</Col>
                                            </Row>
                                            <Row style={{ backgroundColor: "" }}>
                                                <Col className='my-1'><input className='contact-input' type="text" placeholder='' /></Col>
                                                <Col className='my-1'><input className='contact-input' type="text" placeholder='' /></Col>
                                            </Row>
                                            <Row className='mt-3' style={{ backgroundColor: "", marginTop: "" }}>
                                                <Col className='contact-input-title'>What are you interseted in?</Col>
                                                <Col className='contact-input-title'>Project Budget</Col>
                                            </Row>
                                            <Row style={{ backgroundColor: "" }}>
                                                <Col className='my-1'><input type="text" className='contact-input' placeholder='' /></Col>
                                                <Col className='my-1'><input type="text" className='contact-input' placeholder='' /></Col>
                                            </Row>
                                            <Row className='mt-3'>
                                                <Col className='contact-input-title'>Message</Col>
                                            </Row>
                                            <Row className=''>
                                                <Col className='my-1' style={{ backgroundColor: "", }}><textarea className='contact-input h-100' /></Col>
                                            </Row>

                                            <Row className='mt-3'>
                                                <Col className='contact-input-title'>
                                                    <div className='login-submit-button'>
                                                        <Button className='' type='submit'>
                                                            Submit
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </Col>
                {/* <Col>
        </Col> */}
            </Row>
        </Container>
    )
}
